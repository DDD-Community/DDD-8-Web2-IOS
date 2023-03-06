import { Dimensions, StyleSheet } from "react-native";
import { BgColor, FontSize, FontWeight, HexColor, TextColor } from "~constants";

export const styles = StyleSheet.create({
  view: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: HexColor.White,
    width: "100%",
    // height: 68,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    shadowColor: HexColor.Black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    alignItems: "center",
    shadowRadius: 4,
    shadowOpacity: 0.05,
    marginBottom: 16,
  },
  textView: {
    flex: 1,
  },
  placeName: {
    fontSize: FontSize.Medium,
    fontWeight: FontWeight.SemiBold,
    height: 22,
  },
  address: {
    fontWeight: FontWeight.Regular,
    fontSize: FontSize.Small,
    marginTop: 2,
  },
  bookmarkButton: {},
});
