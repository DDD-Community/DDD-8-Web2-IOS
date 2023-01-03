import React, { FC } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { RootStackPramList } from "../../types";
import { Image } from "react-native";
import { ButtonWithIcon } from "../../components/ButtonWithIcon";
import LogoApple from "../../../assets/logo-apple.svg";
import LogoKakao from "../../../assets/logo-kakao.svg";

const styles = StyleSheet.create({
  logo: {
    width: 219,
    height: 80,
    marginBottom: 5,
  },
  title: {
    marginTop: 5,
    marginBottom: 55,
  },
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonWrap: {
    display: "flex",
    flexDirection: "column",
  },
});

type Props = {
  navigation: NavigationProp<RootStackPramList, "Login">;
};

const Login: FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.view}>
      <Image style={styles.logo} source={require("../../../assets/logo.png")} />
      <Text style={styles.title}>라트립과 함께 여행을 떠나요!</Text>
      <View style={styles.buttonWrap}>
        <ButtonWithIcon
          title="Kakao로 로그인"
          backgroundColor="#FEE500"
          titleColor="#000"
          Icon={() => <LogoKakao width={28} height={28} />}
          onPress={() => navigation.navigate("SettingRegion")}
        />
        <ButtonWithIcon
          title="Apple로 로그인"
          backgroundColor="#000000"
          titleColor="#fff"
          Icon={() => <LogoApple width={28} height={28} />}
          onPress={() => navigation.navigate("SettingRegion")}
        />
      </View>
    </View>
  );
};

export { Login };
