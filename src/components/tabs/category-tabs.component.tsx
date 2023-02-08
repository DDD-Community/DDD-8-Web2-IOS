import React, { FC } from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Category, CategoryText } from "~constants";
import { Text } from "../text.component";
import { styles } from "./category-tabs.styles";

type CategoryTabValue = Category | "all";

const TAB_ITEMS = [
  {
    title: "전체",
    value: "all",
  },
  ...[
    Category.TouristAttraction,
    Category.Restaurant,
    Category.Cafe,
    Category.Accommodation,
    Category.Mart,
    Category.Etc,
  ].map((value) => ({
    title: CategoryText[value],
    value,
  })),
] as const;

type Props = {
  value: CategoryTabValue;
  onPress: (caregory: CategoryTabValue) => void;
};

export const CategoryTabs: FC<Props> = ({ value, onPress }) => {
  return (
    <View style={styles.view}>
      {TAB_ITEMS.map(({ title, value: itemValue }) => {
        const active = value === itemValue;
        return (
          <View key={itemValue} style={styles.itemView}>
            <TouchableOpacity onPress={() => onPress(itemValue)}>
              <View style={styles.buttonView}>
                <Text
                  style={[styles.tabTitle, active && styles.tabTitleActive]}
                >
                  {title}
                </Text>
              </View>
              {active && <View style={styles.activeIndicator} />}
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};
