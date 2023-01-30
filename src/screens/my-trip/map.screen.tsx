import React, { FC, useState } from "react";
import { View } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import {
  SearchInput,
  MapWebView,
  TopFixedView,
  Layout,
  Text,
  DaysTab,
  MapWebViewHandle,
  PlaceItem,
  Button,
} from "~components";
import IconMarker from "~assets/icon/icon-marker.svg";
import { styles } from "./map.styles";
import { MainNavigationParamList, MessageType, NavigationKey } from "~types";
import {
  useFetchCurrentTravelPlan,
  useFetchDaySchedule,
  FetchDayScheduleResponse,
} from "~api";
import { useRef } from "react";
import { formatDot } from "~utils/date";
import { getAccessToken } from "~utils/secure-store";
import DraggableFlatList from "react-native-draggable-flatlist";
import { addDays } from "date-fns";

type Props = {
  navigation: NavigationProp<MainNavigationParamList, NavigationKey.MyTripMap>;
};

const MyTripMapScreen: FC<Props> = ({ navigation }) => {
  const { travelPlan, daySchedules } = useFetchCurrentTravelPlan();
  const [selectedDay, setSelectedDay] = useState(1);
  const hasDaySchedules = !!daySchedules.data?.daySchedules.length;
  const daySchedule = useFetchDaySchedule(
    {
      travelPlanId: travelPlan.data?.content?.id!,
      dayScheduleId: daySchedules.data?.daySchedules?.[selectedDay - 1].id!,
    },
    {
      enabled: hasDaySchedules,
    }
  );
  const daySchedulePlaces = daySchedule.data?.daySchedulePlaces;
  const webViewRef = useRef<MapWebViewHandle>(null);
  const onSelectDay = (day: number) => {
    setSelectedDay(day);
    webViewRef?.current?.postMessage(MessageType.onSelectDay, {
      selectedDay: day,
    });
  };

  const renderItem = ({
    item,
    drag,
  }: {
    item: FetchDayScheduleResponse["daySchedulePlaces"][number];
    drag: any;
  }) => {
    return (
      <PlaceItem
        name={item.place.name}
        category={item.place.category}
        memo={item.memo}
        onLongPress={drag}
      />
    );
  };
  if (!travelPlan.data || !travelPlan.data.content) {
    // TODO loading?
    return <></>;
  }

  const title = travelPlan.data.content.title;
  const travelDays = travelPlan.data.content.travelDays;
  const startDate = new Date(travelPlan.data.content.startDate);
  const endDate = addDays(startDate, travelDays - 1);
  const formattedStartDate = formatDot(startDate);
  const travelDayInfoText = `${formattedStartDate} - ${endDate.getDate()} (${travelDays}일간)`;

  return (
    <Layout>
      <View style={styles.mapContainer}>
        <MapWebView
          ref={webViewRef}
          onLoad={async () => {
            webViewRef.current?.postMessage(MessageType.onInit, {
              accessToken: await getAccessToken(),
            });
          }}
        />
        <View style={styles.daysTabContainer}>
          <DaysTab
            days={travelDays}
            selectedDay={selectedDay}
            onSelect={onSelectDay}
          />

          {hasDaySchedules && (
            <DraggableFlatList
              style={styles.listView}
              data={daySchedulePlaces || []}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              onDragEnd={({ data }) => data}
            />
          )}
          {!hasDaySchedules && <Text>아직 등록된 일정이 없어요</Text>}
        </View>
      </View>
      <TopFixedView>
        <View style={styles.topFixedCardView}>
          <IconMarker />
          <View style={styles.topFixedCardViewTextView}>
            <Text>{title}</Text>
            <Text>{travelDayInfoText}</Text>
          </View>
        </View>
        <SearchInput
          style={styles.searchInput}
          placeholder="장소를 검색해보세요!"
          value={""}
          onChangeText={() => {}}
          onSumbitEditing={() => {
            console.log("aaa");
          }}
        />
        <Button
          title="temp"
          onPress={() =>
            navigation.getParent()?.navigate(NavigationKey.SearchResultDetail)
          }
        ></Button>
      </TopFixedView>
    </Layout>
  );
};

export { MyTripMapScreen };
