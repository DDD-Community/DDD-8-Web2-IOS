import { StyleSheet } from "react-native";
import { FontSize, FontWeight, HexColor } from "../../../constants/theme";
import Constants from "expo-constants";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
    // paddingTop: 44,
  },
  topFixed: {
    width: "100%",
    backgroundColor: HexColor.White,
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
    position: "absolute",
    top: 44 + Constants.statusBarHeight,
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  bottomSheet: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  bottomSheetCtaText: {
    fontSize: FontSize.Small,
    fontWeight: FontWeight.SemiBold,
    color: HexColor.N700,
    marginTop: 10,
    marginBottom: 20,
  },
});
