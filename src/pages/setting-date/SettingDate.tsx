import React, { FC, useEffect, useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { RootStackPramList } from "../../types";
import { CalendarList, DateData, CalendarProps } from "react-native-calendars";
import { format } from "date-fns";

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

function getDates(startDate: Date, endDate: Date): Date[] {
  const dates: Date[] = [];
  let currentDate = startDate;
  const addDays = function (days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };
  while (currentDate <= endDate) {
    dates.push(currentDate);
    currentDate = addDays.call(currentDate, 1);
  }
  return dates;
}

function formatDate(date: Date): string {
  return format(date, "yyyy-MM-dd");
}

const SettingDate: FC<Props> = ({ navigation }) => {
  const [startDate, setStartDate] = useState<DateData | null>(null);
  const [endDate, setEndDate] = useState<DateData | null>(null);
  const [markedDates, setMarkedDates] = useState<MarkedDates>({});

  const onDayPress = (date: DateData) => {
    if (!startDate) {
      setStartDate(date);
      return;
    }

    if (!endDate) {
      setEndDate(date);
    }
  };

  useEffect(() => {
    if (startDate || endDate) {
      const startTimestamp = startDate?.timestamp || endDate?.timestamp;
      const endTimestamp = endDate?.timestamp || startDate.timestamp;
      const startDateIns = new Date(startTimestamp);
      const endDateIns = new Date(endTimestamp);

      const dates = getDates(startDateIns, endDateIns);
      const datesSet = dates.reduce((dateSet, date) => {
        const key = formatDate(date);
        dateSet[key] = {
          color: "green",
          selected: true,
        };
        return dateSet;
      }, {} as MarkedDates);

      datesSet[formatDate(startDateIns)] = {
        startingDay: true,
        endingDay: false,
        selected: true,
        color: "green",
      };
      datesSet[formatDate(endDateIns)] = {
        endingDay: true,
        startingDay: false,
        selected: true,
        color: "green",
      };

      setMarkedDates(datesSet);
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
