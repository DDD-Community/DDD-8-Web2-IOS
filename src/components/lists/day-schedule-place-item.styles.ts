import { StyleSheet } from "react-native";
import {
  BgColor,
  FontFamily,
  FontSize,
  FontWeight,
  HexColor,
} from "~constants";

export const styles = StyleSheet.create({
  view: {
    height: 64,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    marginVertical: 4,
    alignItems: "center",
  },
  placeInfoView: {
    backgroundColor: "#f4f7ff",
    borderRadius: 16,
    flex: 1,
    height: "100%",
    paddingLeft: 16,
    paddingTop: 13,
    display: "flex",
    flexDirection: "row",
  },
  placeInfoDetailView: {
    width: 500,
  },
  placeInfoDetail: {
    display: "flex",
    flexDirection: "row",
  },
  name: {
    fontWeight: FontWeight.SemiBold,
    fontSize: FontSize.Small,
    color: HexColor.N900,
    marginRight: 4,
  },
  category: {
    color: HexColor.N500,
    fontWeight: FontWeight.Regular,
  },
  editButtonText: {
    color: HexColor.Primary,
    fontWeight: FontWeight.SemiBold,
  },

  touchableView: {
    height: "100%",
    justifyContent: "center",
    paddingHorizontal: 2,
  },
});
