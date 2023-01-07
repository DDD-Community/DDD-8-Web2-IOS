import React, { FC } from "react";
import type { NavigationProp } from "@react-navigation/native";
import { View } from "react-native";
import { Button, Layout, Text } from "~components";
import { styles } from "./menu.styles";
import { NavigationKey, LoginNavigationParamList } from "~types";
import LogoApple from "~assets/logo-apple.svg";
import LogoKakao from "~assets/logo-kakao.svg";
import Logo from "~assets/logo.svg";

type Props = {
  navigation: NavigationProp<LoginNavigationParamList, NavigationKey.LoginMenu>;
};

const LoginMenuScreen: FC<Props> = ({ navigation }) => {
  return (
    <Layout style={styles.view} statusBarLayoutOptions={{ show: false }}>
      <Logo />
      <Text style={styles.subTitle}>라트립과 함께 여행을 떠나요!</Text>
      <View style={styles.buttonWrap}>
        <Button
          title="Kakao로 로그인"
          buttonStyle={styles.kakaoLoginButton}
          textStyle={styles.kakaoLoginButtonText}
          iconStyle={styles.kakaoIconStyle}
          Icon={LogoKakao}
          onPress={() => navigation.navigate(NavigationKey.LoginKakao)}
        />
        <Button
          title="Apple로 로그인"
          buttonStyle={styles.appleLoginButton}
          textStyle={styles.appleLoginButtonText}
          iconStyle={styles.appleIconStyle}
          Icon={LogoApple}
          onPress={() => navigation.navigate(NavigationKey.MainNavigator)}
        />
      </View>
    </Layout>
  );
};

export { LoginMenuScreen };
