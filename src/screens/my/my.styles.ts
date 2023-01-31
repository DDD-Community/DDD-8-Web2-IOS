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
  iconMarker: {
    alignItems: "center",
    paddingTop: 70,
    paddingBottom: 40,
  },
  contentView: {
    // flex: 1,
    //   height: "100%",
    // justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  userInfo: {
    width: "100%",
    fontWeight: FontWeight.Bold,
    textAlign: "center",
    fontSize: 24,
  },
  listView: {
    width: "90%",
    display: "flex",
    marginHorizontal: 20,
    borderBottomColor: HexColor.N20,
    borderBottomWidth: 2,
    justifyContent: "center",
    height: 64,
  },
  listText: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    paddingBottom: 12,
    paddingTop: 12,
    borderRadius: 12,
    fontWeight: FontWeight.SemiBold,
    fontSize: FontSize.Large,
    color: HexColor.N700,
  },
});
