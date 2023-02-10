import React from "react";
import { View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useRecoilValue } from "recoil";
import { latestPlanQuery } from "~stores/plan";
import { Category, CategoryText } from "../../constants/place-category";
import { Text } from "../text.component";
import { styles } from "./category-suggestion-list.styles";

const CATEGORY_IMAGES = {
  [Category.Accommodation]: require("../../../assets/images/category-accommodation.jpeg"),
  [Category.Cafe]: require("../../../assets/images/category-cafe.jpeg"),
  [Category.Mart]: require("../../../assets/images/category-mart.jpeg"),
  [Category.TouristAttraction]: require("../../../assets/images/category-tourist-attraction.jpeg"),
  [Category.Restaurant]: require("../../../assets/images/category-restaurant.jpeg"),
};

const CAREGORY_ITEMS = [
  Category.TouristAttraction,
  Category.Accommodation,
  Category.Restaurant,
  Category.Cafe,
  Category.Mart,
];

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
        {CAREGORY_ITEMS.filter((category) => category !== Category.Etc).map(
          (category) => {
            return (
              <View key={category} style={styles.card}>
                <Image
                  source={
                    CATEGORY_IMAGES[category as Exclude<Category, Category.Etc>]
                  }
                  style={styles.image}
                />
                <Text style={styles.name}>{CategoryText[category]}</Text>
              </View>
            );
          }
        )}
      </ScrollView>
    </View>
  );
};
