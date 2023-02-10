import React, { Fragment, useMemo } from "react";
import { View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useRecoilValue } from "recoil";
import { latestPlanQuery } from "~stores/plan";
import { useFetchPlacesInRegion, useGetBookmarkRegions } from "../../api/hooks";
import { CategoryText } from "../../constants/place-category";
import { Text } from "../text.component";
import { styles } from "./bookmarks-places-suggestion-list.styles";
import { chunk } from "~utils/array";
import { Button } from "../buttons/button.component";
import { TouchableOpacity } from "@gorhom/bottom-sheet";

export const BookmarksPlacesSuggesionList = () => {
  const travelPlan = useRecoilValue(latestPlanQuery);
  const region =
    travelPlan.state.hasPlan && travelPlan.state.isEffectivePlan
      ? travelPlan.data.content?.region!
      : "기타";

  const placesInBookmarks = useGetBookmarkRegions({
    region,
    page: 0,
    size: 4,
  });

  const rows = useMemo(() => {
    if (!placesInBookmarks.data?.places.length) {
      return [];
    }
    return chunk(placesInBookmarks.data?.places || [], 2);
  }, [placesInBookmarks.data?.places]);

  if (rows.length === 0) {
    return <></>;
  }
  return (
    <View style={styles.view}>
      <View
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <Text style={styles.title}>근처에 북마크한 장소가 있어요!</Text>
        <TouchableOpacity
          style={{
            marginLeft: "auto",
            marginRight: 0,
          }}
        >
          <Text>더보기</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.grid}>
        {rows.map((row, index) => {
          return (
            <View style={styles.row} key={index}>
              {row.map((place, index) => {
                return (
                  <View
                    key={place.id}
                    style={[
                      styles.card,
                      index === 0 && {
                        marginRight: 8,
                      },
                      index === 1 && {
                        marginLeft: 8,
                      },
                    ]}
                  >
                    <Image
                      source={{ uri: place.imageLink }}
                      style={styles.image}
                    />
                  </View>
                );
              })}
            </View>
          );
        })}
      </View>
    </View>
  );
};
