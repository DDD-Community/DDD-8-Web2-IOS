import { StyleSheet } from "react-native";
import { BgColor } from "~constants";

export const styles = StyleSheet.create({
  topFixedCardView: {
    width: "100%",
    backgroundColor: BgColor.Base,
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  daysTabContainer: {
    height: 227,
    paddingLeft: 0,
    paddingTop: 13,
    paddingRight: 0,
  },
  mapContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
  },
  topFixedCardViewTextView: {
    width: "100%",
  },
  searchInput: {
    position: "relative",
    bottom: -7,
  },
});
