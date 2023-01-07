import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import type { NavigationProp } from "@react-navigation/native";
import IconNavClose from "~assets/icon/icon-nav-close.svg";
import { Button, KakaoLoginWebView } from "~components";

const styles = StyleSheet.create({
  view: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
  },
  header: {
    display: "flex",
    flexDirection: "column",
  },
});

type Props = {
  navigation: NavigationProp<any>;
};

const LoginKakaoScreen: FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.view}>
      <View style={styles.header}>
        <Button
          style={{
            width: 20,
            marginLeft: "auto",
            marginRight: 20,
          }}
          Icon={() => <IconNavClose width={17} height={17} />}
          onPress={() => {
            navigation.goBack();
          }}
        ></Button>
      </View>
      <KakaoLoginWebView />
    </View>
  );
};

export { LoginKakaoScreen };
