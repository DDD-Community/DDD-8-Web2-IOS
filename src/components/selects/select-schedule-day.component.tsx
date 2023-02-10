import React, { FC, useMemo } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { daySchedulesQuery, latestPlanQuery } from "~stores/plan";
import { FetchDaySchedulesResponse } from "../../api/types";
import { Button } from "../buttons/button.component";
import { styles } from "./select-schedule-day.styles";

type Props = {
  selectedDay: number;
  onSelect: (day: number, dayScheduleId: string) => void;
};

export const SelectScheduleDay: FC<Props> = ({ selectedDay, onSelect }) => {
  const lodableTravelPlan = useRecoilValueLoadable(latestPlanQuery);
  const travelPlan = lodableTravelPlan.contents;
  const lodableDaySchedules = useRecoilValueLoadable(daySchedulesQuery);
  const totalDays = travelPlan?.data?.content?.travelDays || 10;
  const items = useMemo(
    () =>
      Array.from({ length: totalDays }).map((_, idx) => ({
        title: `day ${idx + 1}`,
        key: idx + 1,
      })),
    [totalDays]
  );

  if (
    lodableTravelPlan.state === "loading" ||
    lodableDaySchedules.state === "loading"
  ) {
    return <></>;
  }
  const daySchedules = lodableDaySchedules.contents;

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollInnerViewContainerStyle}
    >
      <View style={styles.scrollInnerView}>
        {items.map((item) => (
          <Button
            key={item.key}
            title={item.title}
            buttonStyle={[
              styles.dayButtonCommon,
              item.key === selectedDay && styles.dayButtonActive,
            ]}
            textStyle={
              item.key === selectedDay
                ? styles.dayButtonActiveText
                : styles.dayButtonInActiveText
            }
            onPress={() =>
              onSelect(
                item.key,
                daySchedules.data.daySchedules[selectedDay - 1].id
              )
            }
          />
        ))}
      </View>
    </ScrollView>
  );
};
