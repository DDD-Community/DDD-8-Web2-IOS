import React, { FC, useEffect, useRef, useState } from "react";
import {
  Button,
  Layout,
  MapWebView,
  MapWebViewHandle,
  RegionPlacesSuggestionList,
  SearchInput,
  Text,
} from "~components";
import { NavigationProp } from "@react-navigation/native";
import {
  NavigationKey,
  HomeNavigationParamList,
  MessageType,
  ReceivedMessageType,
} from "~types";
import { styles } from "./search.styles";
import { View } from "react-native";
import { MAP_WEB_URL } from "@env";
import { postKakaoPlace, searchPlaces } from "~api";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { latestPlanQuery } from "~stores/plan";
import { SafeAreaView } from "react-native-safe-area-context";

import { Category, FontSize, FontWeight, HexColor } from "~constants";

type Props = {
  navigation: NavigationProp<HomeNavigationParamList, NavigationKey.Search>;
  route?: {
    params: { keyword?: string; category?: Category };
  };
};

export const SearchScreen: FC<Props> = ({ navigation, route }) => {
  const mapUri = `${MAP_WEB_URL}/search`;
  const [keyword, setKeyword] = useState(route?.params?.keyword || "");
  const [page, setPage] = useState(1);
  const loadableTravelPlan = useRecoilValueLoadable(latestPlanQuery);
  const webViewRef = useRef<MapWebViewHandle>(null);
  const [mode, setMode] = useState<"suggest" | "map" | "empty">("suggest");

  if (loadableTravelPlan.state === "loading") {
    return <></>;
  }

  const travelPlan = loadableTravelPlan.contents;
  const onPressBackButton = () => navigation.goBack();

  const onPressCancel = () => {
    setKeyword("");
    setPage(1);
  };

  const onSubmitEditing = async () => {
    setPage((prev) => prev + 1);
    const result = await searchPlaces({
      keyword,
      latitude: travelPlan.state.location.latitude,
      longitude: travelPlan.state.location.longitude,
      page: page,
    });
    if (result.totalCount === 0) {
      setMode("empty");
      return;
    }
    setMode("map");

    webViewRef.current?.postMessage(MessageType.OnResPlacesSearch, {
      keyword: keyword,
      ...result,
    });
    webViewRef.current?.postMessage(MessageType.SetLocation, {
      latitude: travelPlan.state.location.latitude,
      longitude: travelPlan.state.location.longitude,
    });
  };

  const onMessage = async (
    type: string,
    data: { id: string; name: string; address: string }
  ) => {
    if (type === ReceivedMessageType.GoLocationDetail) {
      const kakaoPlace = await postKakaoPlace(data);
      navigation.navigate(NavigationKey.PlaceDetail, {
        placeId: kakaoPlace.id,
      });
    }
  };

  return (
    <View style={styles.view}>
      <SafeAreaView edges={["left", "right", "top"]}>
        <View style={styles.searchInputView}>
          <SearchInput
            value={keyword}
            onChangeText={setKeyword}
            onPressCancel={onPressCancel}
            onSumbitEditing={() => onSubmitEditing()}
          />
          <Button
            title="취소"
            style={styles.backButton}
            onPress={onPressBackButton}
          />
        </View>
      </SafeAreaView>
      <View
        style={{
          flex: 1,
          position: "relative",
          display: "flex",
        }}
      >
        <MapWebView uri={mapUri} ref={webViewRef} onMessage={onMessage} />
        {mode === "suggest" && (
          <View
            style={{
              position: "absolute",
              top: 0,
              backgroundColor: HexColor.White,
              width: "100%",
              height: "100%",
            }}
          >
            <RegionPlacesSuggestionList />
          </View>
        )}
        {mode === "empty" && (
          <View
            style={{
              position: "absolute",
              top: 0,
              backgroundColor: HexColor.White,
              flex: 1,
              width: "100%",
              display: "flex",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: HexColor.N90,
                fontSize: FontSize.Large,
                fontWeight: FontWeight.Regular,
              }}
            >
              검색 결과가 없습니다 ㅠㅜ
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};
