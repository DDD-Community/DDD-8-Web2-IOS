import { StyleSheet } from "react-native";
//import { UiConstants } from "~constants";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
  },
  helpMessageText: {
    fontSize: 24,
    fontWeight: "700",
    marginVertical: 20,
    lineHeight: 30,
  },
  topFixed: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    width: "100%",
    backgroundColor: "#fff",
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
});
