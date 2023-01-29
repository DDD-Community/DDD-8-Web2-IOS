import { StyleSheet } from "react-native";
import {
  FontSize,
  FontWeight,
  BgColor,
  TextColor,
} from "../../constants/theme";

const selectButtonCommon = {
  marginTop: 8,
  marginBottom: 34,
  marginHorizontal: 4,
};

export const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#fff",
    paddingLeft: 16,
    paddingRight: 16,
  },
  safeArea: { height: "100%" },
  header: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 16,
    paddingBottom: 8,
    width: "100%",
    alignItems: "flex-start",
  },
  headerDescText: {
    fontWeight: FontWeight.SemiBold,
    fontSize: FontSize.Small,
  },
  headerCloseButton: {
    marginLeft: "auto",
    height: 28,
    width: 28,
  },
  input: {
    borderStyle: "solid",
    borderWidth: 1,
    padding: 10,
  },
  cardsContainer: {},
  card: {},

  col: {
    borderWidth: 4,
    height: 102,
    width: 102,
    margin: 6,
    borderRadius: 16,
    backgroundColor: "#f3f3f3",
  },
  colImage: {
    width: "108%",
    height: "108%",
  },
  colMask: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  regionText: {
    color: "#fff",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: FontSize.Small,
    fontWeight: FontWeight.SemiBold,
  },
  selectButtonTextCommon: {
    fontWeight: FontWeight.SemiBold,
  },
  selectButtonActive: {
    ...selectButtonCommon,
    backgroundColor: BgColor.Primary,
  },
  selectButtonTextActive: {
    ...selectButtonCommon,
    color: TextColor.Primary,
  },
  selectButtonInactive: {
    backgroundColor: BgColor.InActive,
  },
  selectButtonTextInactive: {
    color: TextColor.InActive,
  },
  bottomFixedView: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
});
