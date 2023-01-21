import { StyleSheet } from "react-native";
import { BgColor, FontFamily, FontSize, FontWeight } from "~constants";

export const styles = StyleSheet.create({
  view: {
    height: 64,
    backgroundColor: "#f4f7ff",
    borderRadius: 16,
  },
  title: {
    fontWeight: FontWeight.SemiBold,
    fontFamily: FontFamily,
    fontSize: FontSize.Small,
  },
});
