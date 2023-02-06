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
  ConfirmModal,
  ScheduleHeader,
  ScheduleMapWebView,
} from "~components";
import { styles } from "./map.styles";
import { MainNavigationParamList, NavigationKey } from "~types";

type Props = {
  navigation: NavigationProp<MainNavigationParamList, NavigationKey.MyTripMap>;
};

export const MyTripMapScreen: FC<Props> = ({ navigation }) => {
  const [selectedDay, setSelectedDay] = useState(1);

  const onPressStartPlanning = () =>
    navigation.navigate(NavigationKey.SettingRegion);

  const onPressSearch = () =>
    navigation.getParent()?.navigate(NavigationKey.Search);

  const [edtiable, setEditable] = useState(false);

  return (
    <Layout>
      <View style={styles.mapContainer}>
        <ScheduleMapWebView day={selectedDay} />
        <View style={styles.daysTabContainer}>
          <SelectScheduleDay
            selectedDay={selectedDay}
            onSelect={setSelectedDay}
          />
          <DaySchedulePlaceList
            editable={edtiable}
            onChangeEditMode={setEditable}
            day={selectedDay}
          />
        </View>
      </View>
      <ScheduleHeader
        onPressSearch={onPressSearch}
        onPressStartPlanning={onPressStartPlanning}
      />
    </Layout>
  );
};
