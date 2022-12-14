import React, { FC, useMemo, useState } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { RootStackPramList } from "../../types";
import { CalendarList, DateData, CalendarProps } from "react-native-calendars";
import { dateFormatter, getDatesBetween } from "../../utils/date";

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

const formatDate = dateFormatter("yyyy-MM-dd");

const SettingDate: FC<Props> = ({ navigation }) => {
  const [startDate, setStartDate] = useState<DateData | null>(null);
  const [endDate, setEndDate] = useState<DateData | null>(null);

  const onDayPress = (date: DateData) => {
    if (!startDate) {
      setStartDate(date);
      return;
    }

    if (!endDate) {
      setEndDate(date);
      return;
    }

    if (startDate) {
      setStartDate(date);
      setEndDate(null);
      return;
    }
  };

  const markedDates = useMemo(() => {
    if (startDate || endDate) {
      const startTimestamp = startDate?.timestamp || endDate?.timestamp;
      const endTimestamp = endDate?.timestamp || startDate.timestamp;
      const startDateIns = new Date(startTimestamp);
      const endDateIns = new Date(endTimestamp);
      const dates = getDatesBetween(startDateIns, endDateIns);

      const datesSet = dates.reduce((dateSet, date) => {
        const key = formatDate(date);
        dateSet[key] = {
          color: "green",
          selected: true,
        };
        return dateSet;
      }, {} as MarkedDates);

      const startDateKey = formatDate(startDateIns);
      const endDateKey = formatDate(endDateIns);

      datesSet[startDateKey] = {
        startingDay: true,
        endingDay: false,
        selected: true,
        color: "green",
      };

      if (startDateKey !== endDateKey) {
        datesSet[endDateKey] = {
          endingDay: true,
          startingDay: false,
          selected: true,
          color: "green",
        };
      }

      return datesSet;
    }
  }, [startDate?.dateString, endDate?.dateString]);

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
