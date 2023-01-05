import React, { FC, useMemo, useState } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { RootStackPramList } from "../../types";
import { CalendarList, DateData, CalendarProps } from "react-native-calendars";
import { DateFormatter, getDatesBetween } from "../../utils/date";
import { Button } from "../../components/Button";
import { usePlanDatesState } from "../../store/plan";
import { THEME } from "../../constants/theme";

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

const SettingDate: FC<Props> = ({ navigation }) => {
  const [buttonText, setButtonText] = useState("None");
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
    const formatDateDash = DateFormatter["yyyy-MM-dd"];
    const formatDateDot = DateFormatter["yyyy.MM.dd"];
    const formatDay = DateFormatter["dd"];

    const datesSet: MarkedDates = {};
    const startDate = startDateData ? new Date(startDateData.timestamp) : null;
    const endDate = endDateData ? new Date(endDateData.timestamp) : null;

    if (startDate) {
      const key = formatDateDash(startDate);
      datesSet[key] = {
        startingDay: true,
        endingDay: endDate ? false : true,
        selected: true,
        color: THEME.PRIMARY_BG_COLOR,
      };
    }

    if (endDate) {
      const key = formatDateDash(endDate);
      datesSet[key] = {
        startingDay: false,
        endingDay: true,
        selected: true,
        color: THEME.PRIMARY_BG_COLOR,
      };
    }

    if (startDate && endDate) {
      const dateBetween = getDatesBetween(startDate, endDate);

      dateBetween.forEach((date) => {
        const key = formatDateDash(date);
        datesSet[key] = {
          selected: true,
          color: THEME.PRIMARY_BG_COLOR,
        };
      });

      setButtonText(
        `${formatDateDot(startDate)} - ${formatDay(endDate)} 출발!`
      );
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
      <View
        style={{
          width: "100%",
          backgroundColor: "transparent",
          position: "absolute",
          bottom: 0,
          paddingHorizontal: 21,
        }}
      >
        <Button
          title={buttonText}
          onPress={() => navigation.navigate("Main")}
          buttonStyle={{
            backgroundColor: THEME.PRIMARY_BG_COLOR,
            color: THEME.PRIMARY_TEXT_COLOR,
            width: "100%",
          }}
        />
      </View>
    </View>
  );
};

export { SettingDate };
