import { StyleSheet } from "react-native";
import { FontFamily, FontSize, FontWeight, HexColor } from "~constants";

export const styles = StyleSheet.create({
  view: {
    backgroundColor: HexColor.White,
    height: "100%",
  },
  image: {
    height: 400,
  },
  placeDetailView: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: HexColor.White,
    paddingBottom: 20,
  },
  titleView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    marginBottom: 3,
  },
  titleText: {
    fontSize: FontSize.XXXLarge,
    fontWeight: FontWeight.Bold,
    color: HexColor.Black,
    marginRight: 8,
  },
  addressView: {
    marginTop: 3,
  },
  addressText: {
    marginBottom: 4,
    color: HexColor.N900,
    fontWeight: FontWeight.Regular,
    fontFamily: FontFamily,
    fontSize: FontSize.Small,
  },
  categoryText: {
    fontSize: FontSize.Small,
    color: HexColor.N500,
    fontWeight: FontWeight.Regular,
  },
  phoneNumText: {
    color: HexColor.Primary,
  },
  blogTitleView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  blogTitleText: {
    color: HexColor.Green,
    fontWeight: FontWeight.Bold,
    marginLeft: 8,
  },
  blogItemsView: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  blogItemView: {
    backgroundColor: HexColor.White,
    marginVertical: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
    shadowColor: HexColor.Black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderRadius: 8,
    shadowRadius: 4,
    shadowOpacity: 0.05,
  },
  blogItemText: {
    color: HexColor.Green,
  },
  topFixedView: {
    display: "flex",
    alignItems: "flex-start",
  },
  backButton: {
    marginLeft: 20,
  },
  bottomFixedView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    paddingBottom: 16,
  },
  button: {
    borderColor: HexColor.Primary,
    borderWidth: 1,
    marginLeft: 8,
  },
  buttonText: {
    color: HexColor.Primary,
    fontWeight: FontWeight.SemiBold,
    fontSize: FontSize.Large,
  },
  addScheduleButton: {
    backgroundColor: HexColor.Primary,
  },
  addScheduleButtonText: {
    color: HexColor.White,
  },
});
