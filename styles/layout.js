import { StyleSheet } from "react-native";
import { lightMode } from "./lightMode";

export default StyleSheet.create({
  text_header:{},
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
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    height: 30,
  },
  tabText: {
    fontWeight: "bold",
    lineHeight: 30,
  },
  trackComponent: {
    flexDirection: "colume",
    gap: 5,
  },
  mainImg: {
    position: "relative",
    backgroundColor: lightMode.gray10,
    borderRadius: 20,
    height: 200,
    alignItems: "center",
    justifyContent : "center",
  },
  mainImg_img: {
  },
  mainImg_info_wrap: {
    position: "absolute",
    bottom: 0,
    right: 0,
    padding: 10,
    flexDirection: "row",
    gap: 10,
  },
});
