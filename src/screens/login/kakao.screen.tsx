import React, { FC } from "react";
import { View } from "react-native";
import type { NavigationProp } from "@react-navigation/native";
import IconNavClose from "~assets/icon/icon-nav-close.svg";
import { Button, KakaoLoginWebView } from "~components";
import { setAccessToken, setRefreshToken } from "~utils/secure-store";
import { NavigationKey } from "../../types/navigations";
import { styles } from "./kakao.styles";

type Props = {
  navigation: NavigationProp<any>;
};

const LoginKakaoScreen: FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.view}>
      <View style={styles.header}>
        <Button
          style={styles.closeButton}
          Icon={() => <IconNavClose width={17} height={17} />}
          onPress={() => {
            navigation.goBack();
          }}
        ></Button>
      </View>
      <KakaoLoginWebView
        onLoginSuccess={async (data) => {
          await Promise.all([
            setAccessToken(data.token.accessToken),
            setRefreshToken(data.token.refreshToken),
          ]);
          navigation.navigate(NavigationKey.MainNavigator);
        }}
      />
    </View>
  );
};

export { LoginKakaoScreen };
