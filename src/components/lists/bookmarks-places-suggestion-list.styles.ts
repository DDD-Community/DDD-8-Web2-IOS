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
  },
  card: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  image: {
    width: "100%",
    height: 160,
    borderRadius: 16,
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
  grid: {
    width: "100%",
  },
  row: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    marginBottom: 16,
  },
});
