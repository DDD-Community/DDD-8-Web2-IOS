import { StyleSheet } from "react-native";
import { HexColor } from "~constants";

export const styles = StyleSheet.create({
  innerView: {
    flex: 1,
    opacity: 0.8,
    height: 56,
    backgroundColor: HexColor.N10,
    paddingLeft: 10,
    borderRadius: 12,
    paddingHorizontal: 12,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderColor: HexColor.N40,
    borderWidth: 1,
    width: "100%",
  },
});
