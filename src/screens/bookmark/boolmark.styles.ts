import { StyleSheet } from "react-native";
import { FontFamily, FontSize, FontWeight, HexColor } from "~constants";

export const styles = StyleSheet.create({
  view: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: HexColor.White,
    height: "100%",
    width: "100%",
  },
  header: {
    backgroundColor: HexColor.White,
    height: 44,
    width: "100%",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  headerTitleText: {
    fontFamily: FontFamily,
    fontWeight: FontWeight.SemiBold,
    fontSize: FontSize.Large,
  },
  contentView: {
    backgroundColor: HexColor.N10,
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    color: HexColor.N90,
    fontWeight: FontWeight.Regular,
    fontSize: FontSize.Large,
    marginTop: 22,
  },
});
