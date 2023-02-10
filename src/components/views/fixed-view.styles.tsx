import { StyleSheet } from "react-native";
import Constants from "expo-constants";
const StatusBarHeight = Constants.statusBarHeight;

export const styles = StyleSheet.create({
  bottom: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  top: {
    position: "absolute",
    top: 0,
    paddingTop: StatusBarHeight,
    width: "100%",
  },
});
