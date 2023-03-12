import { StyleSheet } from "react-native";
import { FontSize, FontWeight, HexColor } from "../../../constants/theme";
//import { UiConstants } from "~constants";

export const styles = StyleSheet.create({
  view: { height: "100%", width: "100%", backgroundColor: HexColor.White },
  searchInputView: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#fff",
    width: "100%",
    paddingLeft: 20,
    paddingVertical: 0,
    height: 72,
  },
  backButton: { paddingHorizontal: 16, fontSize: FontSize.Medium },
});
