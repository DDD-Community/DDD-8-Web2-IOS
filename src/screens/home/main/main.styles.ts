import { StyleSheet } from "react-native";
import { FontSize, FontWeight, HexColor } from "../../../constants/theme";
//import { UiConstants } from "~constants";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
    paddingTop: 44,
  },
  topFixed: {
    paddingBottom: 40,
    width: "100%",
    backgroundColor: "transparent",
  },
  topFixedTopView: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    position: "relative",
    height: 44,
    alignItems: "center",
    backgroundColor: HexColor.White,
    paddingHorizontal: 16,
  },
  topFixedIconView: {
    flex: 1,
  },
  topFixedButtonsContainer: {
    marginLeft: "auto",
    marginRight: 0,
    width: 72,
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    right: 0,
    top: 0,
  },
  fixedTopRightContainer: {
    position: "absolute",
  },
  searchButton: {
    marginRight: 6,
  },
  buttonView: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});
