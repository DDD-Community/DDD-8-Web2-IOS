import React, { FC, useMemo, useState } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { RootStackPramList } from "../../types";
import { CalendarList, DateData, CalendarProps } from "react-native-calendars";
import { dateFormatter, getDatesBetween } from "../../utils/date";
import { usePlanDatesState } from "../../store/plan";

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderStyle: "solid",
    borderWidth: 1,
    padding: 10,
  },
});

type Props = {
  navigation: NavigationProp<RootStackPramList, "SettingDate">;
};

type MarkedDates = CalendarProps["markedDates"];
type NullableDateData = DateData | null;
type DateRange = [NullableDateData, NullableDateData];

const formatDate = dateFormatter("yyyy-MM-dd");

const SettingDate: FC<Props> = ({ navigation }) => {
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

  const markedDates = useMemo(() => {
    const datesSet: MarkedDates = {};
    const startDate = startDateData ? new Date(startDateData.timestamp) : null;
    const endDate = endDateData ? new Date(endDateData.timestamp) : null;

    if (startDate) {
      const key = formatDate(startDate);
      datesSet[key] = {
        startingDay: true,
        endingDay: endDate ? false : true,
        selected: true,
        color: "green",
      };
    }

    if (endDate) {
      const key = formatDate(endDate);
      datesSet[key] = {
        startingDay: false,
        endingDay: true,
        selected: true,
        color: "green",
      };
    }

    if (startDate && endDate) {
      const dateBetween = getDatesBetween(startDate, endDate);

      dateBetween.forEach((date) => {
        const key = formatDate(date);
        datesSet[key] = {
          selected: true,
          color: "green",
        };
      });
    }

    return datesSet;
  }, [startDateData, endDateData]);

  return (
    <View style={styles.view}>
      <CalendarList
        markingType="period"
        onDayPress={onDayPress}
        markedDates={markedDates}
        pastScrollRange={50}
        futureScrollRange={50}
        scrollEnabled={true}
        showScrollIndicator={true}
      />
    </View>
  );
};

export { SettingDate };
