import React, { FC, useState, useEffect } from "react";
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
import { useFetchCurrentTravelPlan, useFetchDaySchedule } from "~api";
import * as Location from "expo-location";
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
  const daySchedule = useFetchDaySchedule(
    {
      travelPlanId: travelPlan?.data?.content.id!,
      dayScheduleId: daySchedules.data?.daySchedules?.[selectedDay - 1].id!,
    },
    {
      enabled: !!daySchedules.data?.daySchedules.length,
    }
  );
  console.log(daySchedule.data);

  const webViewRef = useRef<MapWebViewHandle>(null);
  const [currentLocation, setCurrentLocation] =
    useState<Location.LocationObject | null>(null);
  const [searchText, setSearchText] = useState("");
  const [tempList, setTempList] = useState(["카페1", "카페2", "카페3"]);
  const onSelectDay = (day: number) => {
    setSelectedDay(day);
    webViewRef?.current?.postMessage(MessageType.onSelectDay, {
      selectedDay: day,
    });
  };

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        const location = await Location.getCurrentPositionAsync();
        setCurrentLocation(location);
      }
    })();
  }, []);

  const renderItem = (param: { item: string; drag: any }) => {
    return <PlaceItem title={param.item} onLongPress={param.drag} />;
  };

  if (!travelPlan.data) {
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
            const accessToken = await getAccessToken();
            console.log("send: " + accessToken);
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
          <DraggableFlatList
            style={styles.listView}
            data={tempList}
            renderItem={renderItem}
            keyExtractor={(item) => item}
            onDragEnd={({ data }) => setTempList(data)}
          />
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
          value={searchText}
          onChangeText={setSearchText}
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
