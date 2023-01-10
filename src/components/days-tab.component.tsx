import React, { FC, useMemo } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Button } from "./button.component";
import { styles } from "./days-tab.styles";

type Props = {
  days: number;
  selectedDay: number;
  onSelect: (day: number) => void;
};

export const DaysTab: FC<Props> = ({ days, selectedDay, onSelect }) => {
  const items = useMemo(
    () =>
      Array.from({ length: days }).map((_, idx) => ({
        title: `day ${idx + 1}`,
        key: idx + 1,
      })),
    [days]
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
