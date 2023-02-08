import { StyleSheet } from "react-native";
import { FontSize, FontWeight, HexColor } from "../../constants/theme";

export const styles = StyleSheet.create({
  containerView: {
    paddingTop: 12,
    paddingBottom: 12,
  },
  listView: {
    width: "100%",
    paddingHorizontal: 16,
  },
  buttonView: {
    width: "100%",
    alignItems: "center",
  },
  editButton: {
    borderWidth: 1,
    width: 128,
    borderColor: HexColor.Primary,
    borderRadius: 50,
    marginTop: 10,
    marginBottom: 32,
  },
  editButtonText: {
    color: HexColor.Primary,
    fontWeight: FontWeight.SemiBold,
  },
  saveButton: {
    backgroundColor: HexColor.Primary,
    borderWidth: 1,
    width: 128,
    borderColor: HexColor.Primary,
    borderRadius: 50,
    marginTop: 10,
    marginBottom: 32,
  },
  saveButtonText: {
    color: HexColor.White,
    fontWeight: FontWeight.SemiBold,
  },
  emptyTextView: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 170,
  },
  emptyText: {
    color: HexColor.N90,
    fontSize: FontSize.Large,
  },
});
