import React, { FC, useMemo } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useRecoilValue } from "recoil";
import { latestPlanQuery } from "~stores/plan";
import { Button } from "../buttons/button.component";
import { styles } from "./select-schedule-day.styles";

type Props = {
  selectedDay: number;
  onSelect: (day: number) => void;
};

export const SelectScheduleDay: FC<Props> = ({ selectedDay, onSelect }) => {
  const latestPlan = useRecoilValue(latestPlanQuery);
  const totalDays = latestPlan.data.content?.travelDays || 10;

  const items = useMemo(
    () =>
      Array.from({ length: totalDays }).map((_, idx) => ({
        title: `day ${idx + 1}`,
        key: idx + 1,
      })),
    [totalDays]
  );

  return (
    <View>
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
              onPress={() => onSelect(item.key)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
