import React, { FC, useState } from "react";
import { Button, Layout, MapWebView, SearchInput } from "~components";
import { NavigationProp } from "@react-navigation/native";
import { NavigationKey, HomeNavigationParamList } from "~types";
import { styles } from "./search.styles";
import { View } from "react-native";
import { MAP_WEB_URL } from "@env";

type Props = {
  navigation: NavigationProp<HomeNavigationParamList, NavigationKey.Main>;
};

export const SearchScreen: FC<Props> = ({ navigation }) => {
  const mapUri = `${MAP_WEB_URL}/search`;

  const [value, setValue] = useState("");

  const onPressBackButton = () => navigation.goBack();

  const onPressCancel = () => setValue("");

  const onSubmitEditing = () => {};

  return (
    <Layout safeAreaStyle={styles.container}>
      <View style={styles.searchInputView}>
        <SearchInput
          value={value}
          onChangeText={setValue}
          onPressCancel={onPressCancel}
          onSumbitEditing={onSubmitEditing}
        />
        <Button
          title="취소"
          style={{ paddingHorizontal: 16 }}
          onPress={onPressBackButton}
        />
      </View>
      <MapWebView uri={mapUri} />
    </Layout>
  );
};
