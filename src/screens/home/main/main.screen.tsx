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
  TopFixedView,
  MapWebViewHandle,
  CtaButton,
  Text,
} from "~components";
import IconSearch from "~assets/icon/icon-search.svg";
import { styles } from "./main.styles";
import { NavigationProp } from "@react-navigation/native";
import { NavigationKey, HomeNavigationParamList, MessageType } from "~types";
import IconLogo from "~assets/icon/icon-logo.svg";
import { MAP_WEB_URL } from "@env";
import { useFetchPlacesInRegion } from "~api";
import BottomSheet from "@gorhom/bottom-sheet";

type Props = {
  navigation: NavigationProp<HomeNavigationParamList, NavigationKey.Main>;
};

export const MainScreen: FC<Props> = ({ navigation }) => {
  const mapUri = `${MAP_WEB_URL}/main`;
  const snapPoints = useMemo(() => ["10%", "30%", "50%", "70%"], []);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const webViewRef = useRef<MapWebViewHandle>(null);
  const [webViewLoaded, setWebViewLoaded] = useState(false);
  const onPressSearchButton = () =>
    navigation.getParent()?.navigate(NavigationKey.Search);

  const onPressStartPlanning = () =>
    navigation.getParent()?.navigate(NavigationKey.SettingRegion);

  const query = useFetchPlacesInRegion({
    region: "전국",
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

  return (
    <Layout safeAreaStyle={styles.container}>
      <Suspense>
        <MapWebView
          uri={mapUri}
          ref={webViewRef}
          onLoad={() => setWebViewLoaded(true)}
        />
        <TopFixedView style={styles.topFixed}>
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
        </TopFixedView>
        <BottomSheet index={0} ref={bottomSheetRef} snapPoints={snapPoints}>
          <View style={styles.bottomSheet}>
            <Text style={styles.bottomSheetCtaText}>
              추천 장소를 더 보고싶다면?
            </Text>
          </View>
        </BottomSheet>
      </Suspense>
    </Layout>
  );
};
