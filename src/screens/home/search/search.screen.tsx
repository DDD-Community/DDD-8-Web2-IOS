import React, { FC } from "react";
import { Button, Layout, MapWebView, SearchInput } from "~components";
import { NavigationProp } from "@react-navigation/native";
import { NavigationKey, HomeNavigationParamList } from "~types";
import { styles } from "./search.styles";
import { View } from "react-native";

type Props = {
  navigation: NavigationProp<HomeNavigationParamList, NavigationKey.Main>;
};

export const SearchScreen: FC<Props> = ({ navigation }) => {
  return (
    <Layout safeAreaStyle={styles.container}>
      <View style={styles.searchInputView}>
        <SearchInput />
        <Button
          title="취소"
          style={{ paddingHorizontal: 16 }}
          onPress={() => navigation.goBack()}
        />
      </View>
      <MapWebView />
    </Layout>
  );
};
