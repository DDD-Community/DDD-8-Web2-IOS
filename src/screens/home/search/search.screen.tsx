import React, { FC, useRef, useState } from "react";
import {
  Button,
  Layout,
  MapWebView,
  MapWebViewHandle,
  SearchInput,
} from "~components";
import { NavigationProp } from "@react-navigation/native";
import { NavigationKey, HomeNavigationParamList, MessageType } from "~types";
import { styles } from "./search.styles";
import { View } from "react-native";
import { MAP_WEB_URL } from "@env";
import { searchPlaces, useSearchPlaces } from "~api";
import { useRecoilValue } from "recoil";
import { latestPlanQuery } from "~stores/plan";
import { REGION_LAT_LANGS } from "../../../constants/regions";
import { SafeAreaView } from "react-native-safe-area-context";
import { HexColor } from "../../../constants/theme";

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

  const onSubmitEditing = async (hasnext: boolean) => {
    setPage(page + 1);
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
  };

  return (
    <View style={styles.view}>
      <SafeAreaView edges={["left", "right", "top"]}>
        <View style={styles.searchInputView}>
          <SearchInput
            value={keyword}
            onChangeText={setKeyword}
            onPressCancel={onPressCancel}
            onSumbitEditing={() => onSubmitEditing(false)}
          />
          <Button
            title="취소"
            style={styles.backButton}
            onPress={onPressBackButton}
          />
        </View>
      </SafeAreaView>
      <MapWebView
        uri={mapUri}
        ref={webViewRef}
        showMore={() => onSubmitEditing(true)}
      />
    </View>
  );
};
