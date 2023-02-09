import React, {
  FC,
  Suspense,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { View } from "react-native";
import {
  Button,
  MapWebView,
  Layout,
  FixedView,
  MapWebViewHandle,
  CtaButton,
  Text,
  RegionPlacesSuggestionList,
  CategorySuggestionList,
} from "~components";
import IconSearch from "~assets/icon/icon-search.svg";
import { styles } from "./main.styles";
import { NavigationProp } from "@react-navigation/native";
import {
  NavigationKey,
  HomeNavigationParamList,
  MessageType,
  ReceivedMessageType,
} from "~types";
import IconLogo from "~assets/icon/icon-logo.svg";
import { MAP_WEB_URL } from "@env";
import { useFetchPlacesInRegion, patchBookmark, postBookmark } from "~api";
import BottomSheet from "@gorhom/bottom-sheet";
import { ScrollView } from "react-native-gesture-handler";

type Props = {
  navigation: NavigationProp<HomeNavigationParamList, NavigationKey.Main>;
};

export const MainScreen: FC<Props> = ({ navigation }) => {
  const mapUri = `${MAP_WEB_URL}/main`;
  const snapPoints = useMemo(() => ["10%", "80%"], []);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const webViewRef = useRef<MapWebViewHandle>(null);
  const [webViewLoaded, setWebViewLoaded] = useState(false);
  const onPressSearchButton = () =>
    navigation.getParent()?.navigate(NavigationKey.Search);

  const onPressStartPlanning = () =>
    navigation.getParent()?.navigate(NavigationKey.SettingRegion);

  const query = useFetchPlacesInRegion({
    region: "기타",
    page: 0,
    size: 10,
  });
  useEffect(() => {
    if (webViewLoaded) {
      webViewRef.current?.postMessage(
        MessageType.OnResPlacesRegions,
        query.data
      );
    }
  }, [webViewLoaded, query.data]);
  const onMessage = async (
    type: string,
    data: { placeId: string; bookmarkTF: boolean }
  ) => {
    let bookMarkResult;
    if (type === ReceivedMessageType.SetBookmark) {
      if (!data.bookmarkTF) {
        bookMarkResult = await postBookmark({ placeId: data.placeId });
      } else {
        bookMarkResult = await patchBookmark({ placeId: data.placeId });
      }
      webViewRef.current?.postMessage(
        MessageType.RefreshBookmark,
        bookMarkResult.activated
        // query.data
      );
    }
  };
  return (
    <Layout safeAreaStyle={styles.container}>
      <Suspense>
        <MapWebView
          uri={mapUri}
          ref={webViewRef}
          onLoad={() => setWebViewLoaded(true)}
          onMessage={onMessage}
        />
        <FixedView type="top" style={styles.topFixed}>
          <View style={styles.topFixedTopView}>
            <View style={styles.topFixedIconView}>
              <IconLogo />
            </View>
            <Button
              Icon={() => <IconSearch width={28} height={28} />}
              onPress={onPressSearchButton}
              buttonStyle={styles.searchButton}
            />
          </View>
          <View style={styles.buttonView}>
            <CtaButton onPress={onPressStartPlanning} />
          </View>
        </FixedView>
        <BottomSheet
          index={0}
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          style={{ width: "100%" }}
        >
          <View style={styles.bottomSheet}>
            <ScrollView style={{ height: "100%" }}>
              <Text style={styles.bottomSheetCtaText}>
                추천 장소를 더 보고싶다면?
              </Text>
              <RegionPlacesSuggestionList />
              <CategorySuggestionList />
            </ScrollView>
          </View>
        </BottomSheet>
      </Suspense>
    </Layout>
  );
};
