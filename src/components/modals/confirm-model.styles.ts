import { StyleSheet } from "react-native";
import { FontSize, FontWeight, HexColor } from "../../constants/theme";

export const styles = StyleSheet.create({
  dimView: {
    backgroundColor: "rgba(27, 32, 39, 0.6)",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  contentView: {
    backgroundColor: HexColor.White,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    padding: 16,
  },
  messageText: {
    color: HexColor.N900,
    fontWeight: FontWeight.SemiBold,
    fontSize: FontSize.Large,
    paddingTop: 20,
    paddingBottom: 16,
  },
  buttonView: {
    display: "flex",
    flexDirection: "row",
  },
  removeButton: {
    width: 134,
    height: 54,
  },
  removeText: {
    color: "rgba(245, 86, 95, 1)",
    fontSize: FontSize.Medium,
    fontWeight: FontWeight.SemiBold,
  },
  cancelText: {
    color: HexColor.N60,
    fontSize: FontSize.Medium,
    fontWeight: FontWeight.SemiBold,
  },
});
