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
    flex: 1,
  },
  title: {
    fontWeight: FontWeight.SemiBold,
    fontFamily: FontFamily,
    fontSize: FontSize.Small,
  },
  editButtonText: {
    color: HexColor.Primary,
  },
});
