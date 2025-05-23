// App.js (NativeWind 버전)
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import layout from "../styles/layout";
import tool, { tools } from "../styles/tool";

export default function App() {
  return (
    <View style={layout.header}>
      <Text>Traaack</Text>
      <View style={tools("flx_row", "gap_3")}>
        <Ionicons name="person-outline" size={24} color={layout.color_black} />
        <Ionicons
          name="settings-outline"
          size={24}
          color={layout.color_black}
        />
      </View>
    </View>
  );
}
