import { StyleSheet } from "react-native";
import { FontSize, FontWeight } from "~constants";

export const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 21,
  },
  logo: {
    width: 219,
    height: 80,
    marginBottom: 5,
  },
  subTitle: {
    marginTop: 5,
    marginBottom: 55,
    fontWeight: FontWeight.SemiBold,
  },
  buttonWrap: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  kakaoIconStyle: {
    width: 28,
    height: 28,
  },
  kakaoLoginButton: {
    backgroundColor: "#FEE500",
    width: "100%",
    marginVertical: 6,
  },
  kakaoLoginButtonText: {
    fontWeight: FontWeight.Regular,
    fontSize: FontSize.Medium,
    color: "#000",
  },
  appleIconStyle: {
    width: 28,
    height: 28,
  },
  appleLoginButton: {
    backgroundColor: "#000000",
    marginVertical: 6,
  },
  appleLoginButtonText: {
    fontWeight: FontWeight.Regular,
    fontSize: FontSize.Medium,
    color: "#fff",
  },
});
