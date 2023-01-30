import React, { FC, useMemo, useState } from "react";
import { View } from "react-native";
import { NavigationProp, Route } from "@react-navigation/native";
import { CalendarList, DateData, CalendarProps } from "react-native-calendars";
import { DateFormatter, getDatesBetween } from "~utils/date";
import { Button, Layout } from "~components";
import { usePlanRegionState } from "~stores/plan";
import { THEME } from "~constants";
import { styles } from "./date.styles";
import { NavigationKey, AppNavigationParamList } from "~types";
import { useCreateTravelPlan } from "~api";
import { differenceInDays } from "date-fns";

type Props = {
  navigation: NavigationProp<AppNavigationParamList, NavigationKey.SettingDate>;
  route: Route<
    NavigationKey.SettingDate,
    {
      region: string;
    }
  >;
};

type MarkedDates = CalendarProps["markedDates"];
type NullableDateData = DateData | null;
type DateRange = [NullableDateData, NullableDateData];

const formatDateDash = DateFormatter["yyyy-MM-dd"];
const formatDateDot = DateFormatter["yyyy.MM.dd"];
const formatDay = DateFormatter["dd"];

export const SettingDateScreen: FC<Props> = ({
  navigation,
  route: {
    params: { region },
  },
}) => {
  const { createTravelPlan, isLoading } = useCreateTravelPlan();
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

  const dateSelected = startDateData || endDateData;

  const onPressSubmit = () => {
    if (!startDate || !endDate || !region) {
      return;
    }
    createTravelPlan(
      {
        region,
        travelStartDate: formatDateDash(startDate),
        travelDays: Math.abs(differenceInDays(endDate, startDate)) + 1,
      },
      {
        onSuccess() {
          navigation.navigate(NavigationKey.MainNavigator);
        },
        onError(e) {
          alert(JSON.stringify(e));
        },
      }
    );
  };

  return (
    <Layout style={styles.view} safeAreaStyle={{ height: "100%" }}>
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
