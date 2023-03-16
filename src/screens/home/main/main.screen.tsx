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
  BookmarksPlacesSuggesionList,
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
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { ScrollView } from "react-native-gesture-handler";
import IconResizeHandle from "~assets/icon/icon-resize-handle.svg";
import Constants from "expo-constants";
import { Dimensions } from "react-native";

type Props = {
  navigation: NavigationProp<HomeNavigationParamList, NavigationKey.Main>;
};

const WINDOW_HEIGHT = Dimensions.get("window").height;

const BottomSheetHandle: FC = () => {
  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        paddingTop: 4,
      }}
    >
      <IconResizeHandle />
    </View>
  );
};

export const MainScreen: FC<Props> = ({ navigation }) => {
  const mapUri = `${MAP_WEB_URL}/main`;
  const [lastSnap, setLastSnap] = useState(
    WINDOW_HEIGHT - Constants.statusBarHeight - 70
  );
  const snapPoints = useMemo(
    () => [76, WINDOW_HEIGHT / 2, lastSnap],
    [lastSnap]
  );
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
  const onMessage = async (type: string, data: any) => {
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
      );
    } else if (type === ReceivedMessageType.GoLocationDetail) {
      navigation.navigate(NavigationKey.PlaceDetail, {
        placeId: data.id,
      });
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
        <View style={styles.buttonView}>
          <CtaButton onPress={onPressStartPlanning} />
        </View>
        <BottomSheet
          detached
          index={0}
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          style={{ width: "100%", borderBottomLeftRadius: 0 }}
          handleHeight={50}
          handleComponent={() => <BottomSheetHandle />}
        >
          <View
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Text style={styles.bottomSheetCtaText}>
              추천 장소를 더 보고싶다면?
            </Text>
          </View>
          <BottomSheetScrollView style={{ backgroundColor: "white" }}>
            <RegionPlacesSuggestionList />
            <CategorySuggestionList />
            <BookmarksPlacesSuggesionList />
          </BottomSheetScrollView>
        </BottomSheet>
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
        </FixedView>
      </Suspense>
    </Layout>
  );
};
