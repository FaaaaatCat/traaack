import { StyleSheet } from "react-native";
import { lightMode } from "./lightMode";

const styles = StyleSheet.create({
  flx_row: { flexDirection: "row" },
  flx_col: { flexDirection: "column" },
  flx_center: { alignItems: "center", justifyContent: "center" },
  flx_sb: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  gap_1: { gap: 3 },
  gap_2: { gap: 5 },
  gap_3: { gap: 10 },
  gap_4: { gap: 15 },
  gap_5: { gap: 20 },

  p_1: { padding: 3 },
  p_2: { padding: 5 },
  p_3: { padding: 10 },
  p_4: { padding: 15 },
  p_5: { padding: 20 },

  pt_1: { paddingTop: 3 },
  pt_2: { paddingTop: 5 },
  pt_3: { paddingTop: 10 },
  pt_4: { paddingTop: 15 },
  pt_5: { paddingTop: 20 },

  pb_1: { paddingBottom: 3 },
  pb_2: { paddingBottom: 5 },
  pb_3: { paddingBottom: 10 },
  pb_4: { paddingBottom: 15 },
  pb_5: { paddingBottom: 20 },

  pl_1: { paddingLeft: 3 },
  pl_2: { paddingLeft: 5 },
  pl_3: { paddingLeft: 10 },
  pl_4: { paddingLeft: 15 },
  pl_5: { paddingLeft: 20 },

  pr_1: { paddingRight: 3 },
  pr_2: { paddingRight: 5 },
  pr_3: { paddingRight: 10 },
  pr_4: { paddingRight: 15 },
  pr_5: { paddingRight: 20 },

  m_1: { margin: 3 },
  m_2: { margin: 5 },
  m_3: { margin: 10 },
  m_4: { margin: 15 },
  m_5: { margin: 20 },

  mt_1: { marginTop: 3 },
  mt_2: { marginTop: 5 },
  mt_3: { marginTop: 10 },
  mt_4: { marginTop: 15 },
  mt_5: { marginTop: 20 },

  mb_1: { marginBottom: 3 },
  mb_2: { marginBottom: 5 },
  mb_3: { marginBottom: 10 },
  mb_4: { marginBottom: 15 },
  mb_5: { marginBottom: 20 },

  ml_1: { marginLeft: 3 },
  ml_2: { marginLeft: 5 },
  ml_3: { marginLeft: 10 },
  ml_4: { marginLeft: 15 },
  ml_5: { marginLeft: 20 },

  mr_1: { marginRight: 3 },
  mr_2: { marginRight: 5 },
  mr_3: { marginRight: 10 },
  mr_4: { marginRight: 15 },
  mr_5: { marginRight: 20 },

  br_1: { borderRadius: 3 },
  br_2: { borderRadius: 5 },
  br_3: { borderRadius: 10 },
  br_4: { borderRadius: 15 },
  br_5: { borderRadius: 20 },
  br_10: { borderRadius: 100 },

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

export const tools = (...names) => names.map((name) => styles[name]);
export default styles;
