import { StyleSheet } from "react-native";
import { BgColor, FontFamily, FontSize, FontWeight } from "~constants";

export const styles = StyleSheet.create({
  mapContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
  },
  headerTitle: {
    fontFamily: FontFamily,
    fontWeight: FontWeight.SemiBold,
    fontSize: FontSize.Large,
  },
  leftButton: {
    position: "absolute",
    left: 0,
  },
});
