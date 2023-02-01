import React, { FC, useEffect, useRef, useState } from "react";
import { View } from "react-native";
import {
  Button,
  MapWebView,
  Layout,
  TopFixedView,
  MapWebViewHandle,
} from "~components";
import IconSearch from "~assets/icon/icon-search.svg";
import { styles } from "./main.styles";
import { NavigationProp } from "@react-navigation/native";
import { NavigationKey, HomeNavigationParamList, MessageType } from "~types";
import IconLogo from "~assets/icon/icon-logo.svg";
import { MAP_WEB_URL } from "@env";
import { useFetchPlacesInRegion } from "~api";

type Props = {
  navigation: NavigationProp<HomeNavigationParamList, NavigationKey.Main>;
};

export const MainScreen: FC<Props> = ({ navigation }) => {
  const mapUri = `${MAP_WEB_URL}/main`;
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
          <Button
            title="✏여행 계획을 세워볼까요?"
            buttonStyle={styles.button}
            textStyle={styles.buttonText}
            onPress={onPressStartPlanning}
          />
        </View>
      </TopFixedView>
    </Layout>
  );
};
