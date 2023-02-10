import { Dimensions, StyleSheet } from "react-native";
import { BgColor, FontWeight, HexColor, TextColor } from "~constants";

const SCROLL_INNER_CONTAINER_PADDING = 16;

export const styles = StyleSheet.create({
  view: {
    height: 44,
  },
  scrollInnerViewContainerStyle: {
    paddingHorizontal: SCROLL_INNER_CONTAINER_PADDING,
    marginBottom: 16,
  },
  scrollInnerView: {
    height: 44,
    paddingHorizontal: 2,
    backgroundColor: "#F3F3F3",
    borderRadius: 40,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    minWidth:
      Dimensions.get("screen").width - SCROLL_INNER_CONTAINER_PADDING * 2,
  },
  dayButtonCommon: {
    marginHorizontal: 4,
    borderRadius: 20,
    paddingVertical: 0,
    paddingHorizontal: 18,
    height: 36,
  },
  dayButtonActive: {
    backgroundColor: BgColor.Primary,
  },
  dayButtonActiveText: {
    color: HexColor.White,
    fontWeight: FontWeight.SemiBold,
  },
  dayButtonInActiveText: {
    color: HexColor.N200,
    fontWeight: FontWeight.SemiBold,
  },
});
