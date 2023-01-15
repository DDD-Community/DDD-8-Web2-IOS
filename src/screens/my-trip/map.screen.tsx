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
  MapWebViewHandle,
} from "~components";
import IconMarker from "~assets/icon/icon-marker.svg";
import { styles } from "./map.styles";
import { MainNavigationParamList, MessageType, NavigationKey } from "~types";
import * as api from "~api";
import * as Location from "expo-location";
import { useRef } from "react";
import { getAccessToken } from "~utils/secure-store";

type Props = {
  navigation: NavigationProp<MainNavigationParamList, NavigationKey.MyTripMap>;
};

const MyTripMapScreen: FC<Props> = ({ navigation }) => {
  const [selectedDay, setSelectedDay] = useState(1);
  const webViewRef = useRef<MapWebViewHandle>(null);
  const [currentLocation, setCurrentLocation] =
    useState<Location.LocationObject | null>(null);
  const [searchText, setSearchText] = useState("");

  const [fetchSearchPlaces] = api.useSearchPlaces({
    keyword: searchText,
    latitude: String(currentLocation?.coords.latitude) || "",
    longitude: String(currentLocation?.coords.longitude) || "",
    page: 1,
  });

  const onSearchInputSumbitEditing = async () => {
    const { data } = await fetchSearchPlaces();
    navigation.navigate(NavigationKey.SearchResultList);
  };

  const onSelectDay = (day: number) => {
    setSelectedDay(day);
    webViewRef?.current?.postMessage(MessageType.onSelectDay, {
      selectedDay: day,
    });
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

  useEffect(() => {
    (async () => {
      webViewRef.current?.postMessage(MessageType.onInit, {
        accessToken: await getAccessToken(),
      });
    })();
  }, [webViewRef]);

  return (
    <Layout>
      <View style={styles.mapContainer}>
        <MapWebView ref={webViewRef} />
        <View style={styles.daysTabContainer}>
          <DaysTab days={10} selectedDay={selectedDay} onSelect={onSelectDay} />
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
