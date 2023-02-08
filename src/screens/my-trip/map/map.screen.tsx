import React, { FC, useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { NavigationProp, useFocusEffect } from "@react-navigation/native";
import {
  Layout,
  SelectScheduleDay,
  DaySchedulePlaceList,
  ScheduleHeader,
  ScheduleMapWebView,
} from "~components";
import { styles } from "./map.styles";
import { MainNavigationParamList, NavigationKey } from "~types";
import { ScrollView } from "react-native-gesture-handler";
import { NestableScrollContainer } from "react-native-draggable-flatlist";

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
      <NestableScrollContainer style={styles.mapContainer}>
        <View style={{ height: 460 }}>
          <ScheduleMapWebView day={selectedDay} />
        </View>
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
      </NestableScrollContainer>
      <ScheduleHeader
        onPressSearch={onPressSearch}
        onPressStartPlanning={onPressStartPlanning}
      />
    </Layout>
  );
};
