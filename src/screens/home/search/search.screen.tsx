import React, { FC, useRef, useState } from "react";
import {
  Button,
  Layout,
  MapWebView,
  MapWebViewHandle,
  SearchInput,
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
import { searchPlaces } from "~api";
import { useRecoilValue } from "recoil";
import { latestPlanQuery } from "~stores/plan";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  navigation: NavigationProp<HomeNavigationParamList, NavigationKey.Main>;
};

export const SearchScreen: FC<Props> = ({ navigation }) => {
  const mapUri = `${MAP_WEB_URL}/search`;
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);
  const travelPlan = useRecoilValue(latestPlanQuery);
  const webViewRef = useRef<MapWebViewHandle>(null);

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
    webViewRef.current?.postMessage(MessageType.OnResPlacesSearch, {
      keyword: keyword,
      ...result,
    });
    webViewRef.current?.postMessage(MessageType.SetLocation, {
      latitude: travelPlan.state.location.latitude,
      longitude: travelPlan.state.location.longitude,
    });
  };

  const onMessage = (
    type: string,
    data: { id: string; name: string; address: string }
  ) => {
    if (type === ReceivedMessageType.GoLocationDetail) {
      navigation.navigate(NavigationKey.PlaceDetail, {
        id: data.id,
        address: data.address,
        name: data.name,
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
      <MapWebView uri={mapUri} ref={webViewRef} onMessage={onMessage} />
    </View>
  );
};
