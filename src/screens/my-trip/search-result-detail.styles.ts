import { StyleSheet } from "react-native";
import {
  BgColor,
  FontFamily,
  FontSize,
  FontWeight,
  HexColor,
} from "~constants";

export const styles = StyleSheet.create({
  titleView: {
    display: "flex",
    flexDirection: "row",
  },
  titleText: {
    fontSize: FontSize.XXXLarge,
    fontWeight: FontWeight.Bold,
    color: HexColor.Black,
  },
  categoryText: {
    fontSize: FontSize.Small,
  },
});
