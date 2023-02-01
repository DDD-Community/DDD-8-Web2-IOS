import React, { FC } from "react";
import { View } from "react-native";
import { Button, MapWebView, Layout, TopFixedView } from "~components";
import { THEME } from "~constants";
import IconSearch from "~assets/icon/icon-search.svg";
import IconBell from "~assets/icon/icon-bell.svg";
import { styles } from "./main.styles";
import { NavigationProp } from "@react-navigation/native";
import { NavigationKey, HomeNavigationParamList } from "~types";
import IconLogo from "~assets/icon/icon-logo.svg";

type Props = {
  navigation: NavigationProp<HomeNavigationParamList, NavigationKey.Main>;
};

export const MainScreen: FC<Props> = ({ navigation }) => {
  const onPressSearchButton = () => {
    navigation.getParent()?.navigate(NavigationKey.Search);
  };

  return (
    <Layout safeAreaStyle={styles.container}>
      <MapWebView />
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
            onPress={() => {
              navigation.navigate(NavigationKey.SettingRegion);
            }}
          />
        </View>
      </TopFixedView>
    </Layout>
  );
};
