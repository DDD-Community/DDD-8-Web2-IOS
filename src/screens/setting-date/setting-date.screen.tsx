import React, { FC, useMemo, useState } from "react";
import { View } from "react-native";
import { NavigationProp, Route } from "@react-navigation/native";
import { CalendarList, DateData, CalendarProps } from "react-native-calendars";
import {
  formatOnlyDay,
  formatDash,
  formatDot,
  getDatesBetween,
} from "~utils/date";
import { Button, Layout, Text } from "~components";
import { THEME } from "~constants";
import { styles } from "./setting-date.styles";
import { NavigationKey, AppNavigationParamList } from "~types";
import { postTravelPlan } from "~api";
import { differenceInDays } from "date-fns";
import IconLeftArrow from "~assets/icon/icon-left-arrow.svg";
import IconNavClose from "~assets/icon/icon-nav-close.svg";
import { useTravelPlanAction } from "~stores/plan";

type Props = {
  navigation: NavigationProp<AppNavigationParamList, NavigationKey.SettingDate>;
  route: Route<
    NavigationKey.SettingDate,
    {
      region: {
        title: string;
        value: string;
      };
    }
  >;
};

type MarkedDates = CalendarProps["markedDates"];
type NullableDateData = DateData | null;
type DateRange = [NullableDateData, NullableDateData];

export const SettingDateScreen: FC<Props> = ({
  navigation,
  route: {
    params: { region },
  },
}) => {
  const travelPlanAction = useTravelPlanAction();
  const [buttonText, setButtonText] = useState("날짜를 선택해주세요");
  const [[startDateData, endDateData], setDateDataRange] = useState<DateRange>([
    null,
    null,
  ]);

  const onDayPress = (date: DateData) => {
    const bothSelected = startDateData && endDateData;
    const noneSelected = !startDateData && !endDateData;

    if (bothSelected || noneSelected) {
      setDateDataRange([date, null]);
      return;
    }

    if (startDateData) {
      const dateRange: DateRange =
        date.timestamp < startDateData.timestamp
          ? [date, startDateData]
          : [startDateData, date];
      setDateDataRange(dateRange);
    }
  };
  const startDate = startDateData ? new Date(startDateData.timestamp) : null;
  const endDate = endDateData ? new Date(endDateData.timestamp) : null;

  const markedDates = useMemo(() => {
    const datesSet: MarkedDates = {};
    let endDateTemp = endDate;
    if (startDate) {
      const key = formatDash(startDate);
      datesSet[key] = {
        startingDay: true,
        endingDay: endDate ? false : true,
        selected: true,
        color: THEME.PRIMARY_BG_COLOR,
      };
      if (!endDateTemp) {
        endDateTemp = startDate;
      }
    }

    if (endDate) {
      const key = formatDash(endDate);
      datesSet[key] = {
        startingDay: false,
        endingDay: true,
        selected: true,
        color: THEME.PRIMARY_BG_COLOR,
      };
    }

    if (startDate && endDateTemp) {
      const dateBetween = getDatesBetween(startDate, endDate || endDateTemp);

      dateBetween.forEach((date) => {
        const key = formatDash(date);
        datesSet[key] = {
          selected: true,
          color: THEME.PRIMARY_BG_COLOR,
        };
      });

      setButtonText(
        `${formatDot(startDate)} - ${formatOnlyDay(
          endDate || endDateTemp
        )} 출발!`
      );
    }

    return datesSet;
  }, [startDateData, endDateData]);

  const dateSelected = startDateData || endDateData;

  const onPressSubmit = async () => {
    if (!startDate || !endDate || !region) {
      return;
    }

    await travelPlanAction.create({
      region: region.value,
      travelDays: Math.abs(differenceInDays(endDate, startDate)) + 1,
      travelStartDate: formatDash(startDate),
    });
    navigation.navigate(NavigationKey.MyTripMap);
  };

  return (
    <Layout style={styles.view} safeAreaStyle={styles.safeArea}>
      <View style={styles.header}>
        <Button Icon={IconLeftArrow} onPress={() => navigation.goBack()} />
        <Text style={styles.headerText}>경기도 여행{"\n"}며칠에 가시나요?</Text>
        <Button Icon={IconNavClose} onPress={() => navigation.goBack()} />
      </View>
      <CalendarList
        markingType="period"
        onDayPress={onDayPress}
        markedDates={markedDates}
        pastScrollRange={50}
        futureScrollRange={50}
        scrollEnabled={true}
        showScrollIndicator={true}
      />
      <View style={styles.bottomFixed}>
        <Button
          title={buttonText}
          onPress={onPressSubmit}
          buttonStyle={[
            styles.selectDateButtonCommon,
            dateSelected
              ? styles.selectDateButtonActive
              : styles.selectDateButtonInActive,
          ]}
          textStyle={[
            styles.selectDateButtonTextCommon,
            dateSelected
              ? styles.selectDateButtonTextActive
              : styles.selectDateButtonTextInActive,
          ]}
        />
      </View>
    </Layout>
  );
};
