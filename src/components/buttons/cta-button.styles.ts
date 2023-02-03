import { StyleSheet } from "react-native";
import { FontSize, FontWeight, HexColor } from "../../constants/theme";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: HexColor.Primary,
  },
  text: {
    color: HexColor.White,
    fontSize: FontSize.Large,
    fontWeight: FontWeight.SemiBold,
  },
});
