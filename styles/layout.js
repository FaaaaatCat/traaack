import { StyleSheet } from "react-native";
import { lightMode } from "./lightMode";

export default StyleSheet.create({
  header: {
    marginTop: 20,
    height: 60,
    backgroundColor: "gray",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  tabMenu: {
    borderRadius: 16,
    padding: 10,
  },
  tabText: {
    fontWeight: 'bold',
  },
  tabText: {},
  bg_black: { backgroundColor: lightMode.black },
  bg_white: { backgroundColor: lightMode.white },
  bg_gray100: { backgroundColor: lightMode.gray100 },
  bg_gray50: { backgroundColor: lightMode.gray50 },
  bg_gray10: { backgroundColor: lightMode.gray10 },
  bg_brand100: { backgroundColor: lightMode.brand100 },
  bg_brand50: { backgroundColor: lightMode.brand50 },
  bg_brand10: { backgroundColor: lightMode.brand10 },
  color_black: { color: lightMode.black },
  color_white: { color: lightMode.white },
  color_gray100: { color: lightMode.gray100 },
  color_gray50: { color: lightMode.gray50 },
  color_gray10: { color: lightMode.gray10 },
  color_brand100: { color: lightMode.brand100 },
  color_brand50: { color: lightMode.brand50 },
  color_brand10: { color: lightMode.brand10 },
});
