import React, { Fragment } from "react";
import { View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useRecoilValue } from "recoil";
import { latestPlanQuery } from "~stores/plan";
import { useFetchPlacesInRegion } from "../../api/hooks";
import { CategoryText } from "../../constants/place-category";
import { Text } from "../text.component";
import { styles } from "./region-places-suggestion-list.styles";

export const RegionPlacesSuggestionList = () => {
  const travelPlan = useRecoilValue(latestPlanQuery);
  const region =
    travelPlan.state.hasPlan && travelPlan.state.isEffectivePlan
      ? travelPlan.data.content?.region!
      : "기타";

  const placesInRegion = useFetchPlacesInRegion({
    region,
    page: 0,
    size: 10,
  });

  if (!placesInRegion.data?.places.length) {
    return <></>;
  }

  return (
    <View style={styles.view}>
      <Text style={styles.title}>
        {travelPlan.data.content?.region} 여기는 어떤가요?
      </Text>
      <ScrollView horizontal style={{ display: "flex", flexDirection: "row" }}>
        {placesInRegion.data?.places.map((place) => {
          return (
            <View key={place.id} style={styles.card}>
              <Image source={{ uri: place.imageLink }} style={styles.image} />
              <Text style={styles.name}>{place.name}</Text>
              <Text style={styles.category}>
                {CategoryText[place.category]}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
