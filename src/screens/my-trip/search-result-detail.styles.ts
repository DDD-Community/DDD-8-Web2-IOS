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
  phoneNumText: {
    color: HexColor.Primary,
  },
  blogTitleView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  blogTitleText: {
    color: HexColor.Green,
    fontWeight: FontWeight.Bold,
    marginLeft: 8,
  },
  blogItemsView: {
    backgroundColor: HexColor.N10,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  blogItemView: {
    backgroundColor: HexColor.White,
    marginVertical: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
    shadowColor: HexColor.Black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderRadius: 8,
    shadowRadius: 4,
    shadowOpacity: 0.05,
  },
  blogItemText: {
    color: HexColor.Green,
  },
});
