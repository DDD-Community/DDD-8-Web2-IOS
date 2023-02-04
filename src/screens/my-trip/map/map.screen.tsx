import React, { FC, useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { NavigationProp, useFocusEffect } from "@react-navigation/native";
import {
  MapWebView,
  TopFixedView,
  Layout,
  Text,
  SelectScheduleDay,
  MapWebViewHandle,
  Button,
  CtaButton,
  DaySchedulePlaceList,
} from "~components";
import IconMarker from "~assets/icon/icon-marker.svg";
import { styles } from "./map.styles";
import { MainNavigationParamList, MessageType, NavigationKey } from "~types";
import { useFetchDaySchedule } from "~api";
import { useRef } from "react";
import { formatDot } from "~utils/date";
import { addDays } from "date-fns";
import IconSearch from "~assets/icon/icon-search.svg";
import { MAP_WEB_URL } from "@env";
import { useRecoilValue } from "recoil";
import { daySchedulesQuery, latestPlanQuery } from "~stores/plan";
import { withSuspense } from "~utils/with-suspense";

type Props = {
  navigation: NavigationProp<MainNavigationParamList, NavigationKey.MyTripMap>;
};

export const MyTripMapScreen = withSuspense(({ navigation }: Props) => {
  const mapUri = `${MAP_WEB_URL}/schedule`;
  const webViewRef = useRef<MapWebViewHandle>(null);
  const [webViewLoaded, setWebViewLoaded] = useState(false);

  const daySchedules = useRecoilValue(daySchedulesQuery);
  const travelPlan = useRecoilValue(latestPlanQuery);

  const [selectedDay, setSelectedDay] = useState(1);
  const selectedSchedule = daySchedules?.data.daySchedules[selectedDay];

  const dayScheduleQuery = useFetchDaySchedule({
    travelPlanId: travelPlan.data.content.id,
    dayScheduleId: selectedSchedule?.id!,
  });

  const hasSchedulePlace = !!dayScheduleQuery.data?.daySchedulePlaces.length;

  useEffect(() => {
    webViewRef.current?.postMessage(
      MessageType.OnResDaySchedulePlaces,
      dayScheduleQuery.data
    );
  }, [webViewLoaded, dayScheduleQuery.data]);

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
          uri={mapUri}
          onLoad={() => setWebViewLoaded(true)}
        />
        <View style={styles.daysTabContainer}>
          <SelectScheduleDay
            selectedDay={selectedDay}
            onSelect={setSelectedDay}
          />
          {hasSchedulePlace && <DaySchedulePlaceList daySchedulePlaces={[]} />}
          {!hasSchedulePlace && (
            <View style={styles.emptyTextView}>
              <Text style={styles.emptyText}>아직 등록된 일정이 없어요</Text>
            </View>
          )}
        </View>
      </View>
      <TopFixedView>
        <View style={styles.topFixedCardView}>
          <IconMarker />
          <View style={styles.topFixedCardViewTextView}>
            <Text>{title}</Text>
            <Text>{travelDayInfoText}</Text>
          </View>
          <Button
            Icon={IconSearch}
            style={{ marginRight: 6 }}
            onPress={() => {
              navigation.getParent()?.navigate(NavigationKey.Search);
            }}
          ></Button>
        </View>
        <View style={styles.buttonView}>
          <CtaButton onPress={() => {}} />
        </View>
      </TopFixedView>
    </Layout>
  );
});
