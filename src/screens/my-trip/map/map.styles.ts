import { StyleSheet } from "react-native";
import { BgColor, FontSize, HexColor } from "~constants";

export const styles = StyleSheet.create({
  topFixedCardView: {
    width: "100%",
    backgroundColor: BgColor.Base,
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 4,
    alignItems: "center",
    height: 44,
  },
  daysTabContainer: {
    minHeight: 227,
    maxHeight: 426,
    paddingLeft: 0,
    paddingTop: 13,
    paddingRight: 0,
  },
  mapContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
  },
  emptyTextView: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 170,
  },
  emptyText: {
    color: HexColor.N90,
    fontSize: FontSize.Large,
  },

  topFixedCardViewTextView: {
    flex: 1,
  },
  searchInput: {
    position: "relative",
    bottom: -7,
  },
  buttonView: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});
