// App.js (NativeWind 버전)
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles/layout";
import theme from "./styles/lightMode"
import tw from "tailwind-react-native-classnames";
import MyTrack from "./components/MyTrack";
import WholeMusics from "./components/WholeMusics";

export default function App() {
  const [tab, setTab] = useState("my");


  return (
    <View>
      {/* 헤더 */}
      <View style={styles.header}>
        <Text>
          Traaack
        </Text>
        <View style={tw`flex-row`}>
          <Ionicons
            name="person-outline"
            size={24}
            color={styles.color_black}
            style={{ marginRight: 16 }}
          />
          <Ionicons
            name="settings-outline"
            size={24}
            color={styles.color_black}
          />
        </View>
      </View>
      {/* 바디 */}
      <View style={tw`p-3`}>
        {/* 탭 메뉴 */}
        <View style={tw`flex-row`}>
          <TouchableOpacity
            onPress={() => setTab("my")}
            style={[
              styles.tabMenu,
              tab === "my" ? styles.bg_black : styles.bg_gray10,
              { marginRight: 10 },
            ]}
          >
            <Text
              style={[
                styles.tabText,
                tab === "my" ? styles.color_brand10 : styles.color_gray50,
              ]}
            >
              내 Track
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setTab("all")}
            style={[
              styles.tabMenu,
              tab === "all" ? styles.bg_black : styles.bg_gray10,
            ]}
          >
            <Text
              style={[
                styles.tabText,
                tab === "all" ? styles.color_brand10 : styles.color_gray50,
              ]}
            >
              전체 음악
            </Text>
          </TouchableOpacity>
        </View>
        {/* 메뉴 페이지 */}
        <ScrollView>{tab === "my" ? <MyTrack /> : <WholeMusics />}</ScrollView>
      </View>
    </View>
  );
}