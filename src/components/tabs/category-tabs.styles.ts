import { Dimensions, StyleSheet } from "react-native";
import { BgColor, FontSize, FontWeight, HexColor, TextColor } from "~constants";

export const styles = StyleSheet.create({
  view: {
    display: "flex",
    flexDirection: "row",
  },
  itemView: {
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "space-around",
    flex: 1,
    backgroundColor: HexColor.N10,
  },
  buttonView: {
    marginBottom: 5,
    marginHorizontal: 1,
  },
  buttonViewActive: {
    borderColor: HexColor.Primary,
  },
  activeIndicator: {
    height: 3,
    borderRadius: 2,
    backgroundColor: HexColor.Primary,
  },
  tabTitle: {
    fontWeight: FontWeight.SemiBold,
    fontSize: FontSize.Small,
    color: HexColor.N500,
    lineHeight: 19,
    // marginRight: 10,
    // marginLeft: 10,
    // flexShrink: 0,
  },
  tabTitleActive: {
    fontWeight: FontWeight.Bold,
    color: HexColor.Primary,
  },
});
