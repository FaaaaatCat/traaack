import { View, Text, Pressable } from "react-native";
import layout from "../styles/layout";
import tool, { tools } from "../styles/tool";
import { useNavigation } from "@react-navigation/native";

export default function MyTrack() {
  const navigation = useNavigation();
  return (
    <>
      {/* 트랙 컴포넌트 */}
      <Pressable
        style={layout.trackComponent}
        onPress={() => navigation.navigate("MusicPlayer")}
      >
        {/* 트랙 img */}
        <View style={layout.mainImg}>
          <Text style={layout.mainImg_img}>🎧</Text>
          <View style={layout.mainImg_info_wrap}>
            <View
              style={tools("bg_gray50", "br_10", "p_1", "flx_row", "gap_1")}
            >
              <Text style={tool.color_white}>🎵0</Text>
            </View>
            <View
              style={tools("bg_gray50", "br_10", "p_1", "flx_row", "gap_1")}
            >
              <Text style={tool.color_white}>🎵0</Text>
            </View>
          </View>
        </View>
        {/* 트랙 info */}
        <View style={tools("flx_sb")}>
          <Text style={layout.text_header}>내 트랙1</Text>
          <Text>아이콘</Text>
        </View>
      </Pressable>
    </>
  );
}
