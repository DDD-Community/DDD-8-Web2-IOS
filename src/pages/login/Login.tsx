import React, { FC } from "react";
import { View, StyleSheet, Text } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { RootStackPramList } from "../../types";
import { Image } from "react-native";
import { Button } from "../../components/Button";
import LogoApple from "../../../assets/logo-apple.svg";
import LogoKakao from "../../../assets/logo-kakao.svg";
import { Dimensions } from "react-native";

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width,
    paddingHorizontal: 21,
  },
  logo: {
    width: 219,
    height: 80,
    marginBottom: 5,
  },
  title: {
    marginTop: 5,
    marginBottom: 55,
  },
  buttonWrap: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
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
        <Button
          title="Kakao로 로그인"
          style={{
            backgroundColor: "#FEE500",
            color: "#000",
            width: "100%",
          }}
          Icon={() => <LogoKakao width={28} height={28} />}
          onPress={() => navigation.navigate("SettingRegion")}
        />
        <Button
          title="Apple로 로그인"
          style={{
            backgroundColor: "#000000",
            color: "#fff",
          }}
          Icon={() => <LogoApple width={28} height={28} />}
          onPress={() => navigation.navigate("SettingRegion")}
        />
      </View>
    </View>
  );
};

export { Login };
