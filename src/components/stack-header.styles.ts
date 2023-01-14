import { StyleSheet } from "react-native";
import { BgColor } from "~constants";

export const styles = StyleSheet.create({
  view: {
    height: 44,
    backgroundColor: BgColor.Base,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  centerArea: {},
  leftButtonArea: {
    marginLeft: 0,
    width: 44,
    marginRight: "auto",
  },
  rightButtonArea: {
    marginRight: 0,
    marginLeft: "auto",
    width: 44,
  },
});
