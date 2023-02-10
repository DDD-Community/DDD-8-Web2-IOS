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
    marginRight: 16,
    alignItems: "center",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 100,
    marginBottom: 20,
    backgroundColor: "red",
  },
  name: {
    color: HexColor.N700,
    fontWeight: FontWeight.SemiBold,
    fontSize: FontSize.Large,
    marginBottom: 4,
    paddingLeft: 2,
  },
  category: {
    color: HexColor.N90,
    fontSize: FontSize.Small,
    fontWeight: FontWeight.Regular,
    paddingLeft: 2,
  },
});
