import React, { FC, useState, useRef, useEffect } from "react";
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
import { View, Text } from "react-native";
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
  const travelPlan = useRecoilValue(latestPlanQuery);
  const [webViewLoaded, setWebViewLoaded] = useState(false);
  const webViewRef = useRef<MapWebViewHandle>(null);
  const [refetch, query] = useSearchPlaces({
    keyword: keyword,
    latitude: REGION_LAT_LANGS[travelPlan.data.content.region].latitude,
    longitude: REGION_LAT_LANGS[travelPlan.data.content.region].longitude,
    page: 0,
  });
  useEffect(() => {
    if (webViewLoaded) {
      webViewRef.current?.postMessage(MessageType.OnResPlacesSearch, {
        keyword: keyword,
        ...query.data,
      });
    }
  }, [webViewLoaded, query.data]);
  const onPressBackButton = () => navigation.goBack();

  const onPressCancel = () => setKeyword("");

  const onSubmitEditing = () => {
    refetch();
  };
  return (
    <Layout safeAreaStyle={styles.container}>
      <View style={styles.searchInputView}>
        <SearchInput
          value={keyword}
          onChangeText={setKeyword}
          onPressCancel={onPressCancel}
          onSubmitEditing={onSubmitEditing}
        />
        <Button
          title="취소"
          style={{ paddingHorizontal: 16 }}
          onPress={onPressBackButton}
        />
      </View>
      {keyword === "" ? (
        <View>
          <Text>검색전</Text>
        </View>
      ) : (
        query.data && (
          <MapWebView
            uri={mapUri}
            ref={webViewRef}
            onLoad={() => setWebViewLoaded(true)}
          />
        )
      )}
      {/* 검색결과 없을때도 웹뷰 사용해야할까요 ?  */}
    </Layout>
  );
};
