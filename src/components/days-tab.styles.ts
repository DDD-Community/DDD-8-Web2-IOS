import { Dimensions, StyleSheet } from "react-native";
import { BgColor, TextColor } from "~constants";

const SCROLL_INNER_CONTAINER_PADDING = 16;

export const styles = StyleSheet.create({
  view: {
    height: 56,
  },
  scrollInnerViewContainerStyle: {
    paddingHorizontal: SCROLL_INNER_CONTAINER_PADDING,
  },
  scrollInnerView: {
    height: 56,
    paddingVertical: 8,
    paddingHorizontal: 4,
    backgroundColor: "#F3F3F3",
    borderRadius: 40,
    display: "flex",
    flexDirection: "row",
    minWidth:
      Dimensions.get("screen").width - SCROLL_INNER_CONTAINER_PADDING * 2,
  },
  dayButtonCommon: {
    marginHorizontal: 4,
    borderRadius: 20,
    paddingVertical: 0,
    paddingHorizontal: 18,
    height: 40,
  },
  dayButtonActive: {
    backgroundColor: BgColor.Primary,
  },
  dayButtonActiveText: {
    color: TextColor.Primary,
  },
  dayButtonInActiveText: {
    color: "#000",
  },
});
