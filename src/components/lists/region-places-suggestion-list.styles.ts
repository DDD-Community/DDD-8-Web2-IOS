import { StyleSheet } from "react-native";
import { FontSize, FontWeight, HexColor } from "../../constants/theme";

export const styles = StyleSheet.create({
  view: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    padding: 20,
  },
  title: {
    color: HexColor.N700,
    fontSize: FontSize.XLarge,
    fontWeight: FontWeight.Bold,
    marginBottom: 20,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    marginHorizontal: 8,
  },
  image: {
    width: 212,
    height: 160,
    borderRadius: 16,
    marginBottom: 20,
  },
  name: {
    color: HexColor.N700,
    fontWeight: FontWeight.SemiBold,
    fontSize: FontSize.Large,
    marginBottom: 5,
    paddingLeft: 2,
    lineHeight: 25,
  },
  category: {
    color: HexColor.N90,
    fontSize: FontSize.Small,
    fontWeight: FontWeight.Regular,
    paddingLeft: 2,
  },
});
