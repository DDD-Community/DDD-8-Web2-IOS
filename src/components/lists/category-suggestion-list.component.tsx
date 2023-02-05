import React from "react";
import { View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useRecoilValue } from "recoil";
import { latestPlanQuery } from "~stores/plan";
import { Category, CategoryText } from "../../constants/place-category";
import { Text } from "../text.component";
import { styles } from "./category-suggestion-list.styles";

export const CategorySuggestionList = () => {
  const travelPlan = useRecoilValue(latestPlanQuery);
  const region =
    travelPlan.state.hasPlan && travelPlan.state.isEffectivePlan
      ? travelPlan.data.content?.region!
      : "기타";

  return (
    <View style={styles.view}>
      <Text style={styles.title}>
        {travelPlan.data.content?.region} 카테고리 추천
      </Text>
      <ScrollView horizontal style={{ display: "flex", flexDirection: "row" }}>
        {Object.values(Category).map((category) => {
          return (
            <View key={category} style={styles.card}>
              <Image source={{ uri: undefined }} style={styles.image} />
              <Text style={styles.name}>{CategoryText[category]}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
