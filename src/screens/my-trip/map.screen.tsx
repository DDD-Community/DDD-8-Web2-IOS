import React, { FC, useState, useEffect } from "react";
import { View } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import {
  SearchInput,
  MapWebView,
  TopFixedCard,
  Layout,
  Text,
  DaysTab,
} from "~components";
import IconMarker from "~assets/icon/icon-marker.svg";
import { styles } from "./map.styles";
import { MainNavigationParamList, NavigationKey } from "~types";
import * as api from "~api";
import * as Location from "expo-location";

type Props = {
  navigation: NavigationProp<MainNavigationParamList, NavigationKey.MyTripMap>;
};

const MyTripMapScreen: FC<Props> = ({ navigation }) => {
  const [selectedDay, setSelectedDay] = useState(1);
  const [currentLocation, setCurrentLocation] =
    useState<Location.LocationObject | null>(null);
  const [searchText, setSearchText] = useState("");

  const [fetchSearchPlaces, data] = api.useSearchPlaces({
    keyword: searchText,
    latitude: String(currentLocation?.coords.latitude) || "",
    longitude: String(currentLocation?.coords.longitude) || "",
    page: 1,
  });

  const onSearchInputSumbitEditing = async () => {
    const { data } = await fetchSearchPlaces();
    console.log(data);
    navigation.navigate(NavigationKey.SearchResultList);
  };

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        const location = await Location.getCurrentPositionAsync();
        setCurrentLocation(location);
      }
    })();
  }, []);

  return (
    <Layout>
      <View style={styles.mapContainer}>
        <MapWebView />
        <View style={styles.daysTabContainer}>
          <DaysTab
            days={10}
            selectedDay={selectedDay}
            onSelect={setSelectedDay}
          />
        </View>
      </View>
      <TopFixedCard>
        <View style={styles.topFixedCardView}>
          <IconMarker />
          <View style={styles.topFixedCardViewTextView}>
            <Text>경기도 여행</Text>
            <Text>2023.02.12 ~ 18 {"(7일간)"}</Text>
          </View>
        </View>
        <SearchInput
          style={styles.searchInput}
          placeholder="장소를 검색해보세요!"
          value={searchText}
          onChangeText={setSearchText}
          onSumbitEditing={onSearchInputSumbitEditing}
        />
      </TopFixedCard>
    </Layout>
  );
};

export { MyTripMapScreen };
