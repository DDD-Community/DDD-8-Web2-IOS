import { StyleSheet } from "react-native";
import { BgColor, FontWeight, TextColor } from "../../constants/theme";

export const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  safeArea: {
    height: "100%",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 21,
    alignItems: "center",
  },
  headerText: {
    textAlign: "center",
  },
  bottomFixed: {
    width: "100%",
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 21,
    paddingVertical: 4,
  },
  selectDateButtonCommon: {
    marginTop: 8,
    marginBottom: 34,
    marginHorizontal: 4,
  },
  selectDateButtonActive: {
    backgroundColor: BgColor.Primary,
  },
  selectDateButtonInActive: {
    backgroundColor: BgColor.InActive,
  },
  selectDateButtonTextCommon: {
    fontWeight: FontWeight.SemiBold,
  },
  selectDateButtonTextActive: {
    color: TextColor.Primary,
  },
  selectDateButtonTextInActive: {
    color: TextColor.InActive,
  },
  input: {
    borderStyle: "solid",
    borderWidth: 1,
    padding: 10,
  },
});
