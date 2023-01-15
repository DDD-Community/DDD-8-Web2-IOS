import React, { FC } from "react";
import { View } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { MapWebView, Layout, Text, StackHeader } from "~components";
import { styles } from "./search-result.styles";
import { MainNavigationParamList, NavigationKey } from "~types";

type Props = {
  navigation: NavigationProp<MainNavigationParamList, NavigationKey.MyTripMap>;
};

export const SearchResultScreen: FC<Props> = ({ navigation }) => {
  return (
    <Layout>
      <StackHeader
        showGoBack
        showClose={false}
        onPressGoBack={() => navigation.goBack()}
      >
        <Text style={styles.headerTitle}>00카페</Text>
      </StackHeader>
      <View style={styles.mapContainer}>
        <MapWebView />
      </View>
    </Layout>
  );
};
