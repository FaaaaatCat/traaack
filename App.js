// App.js (NativeWind 버전)
import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import layout from "./styles/layout";
import tool, { tools } from "./styles/tool";
import Header from "./components/Header";
import MyTrack from "./components/MyTrack";
import WholeMusics from "./components/WholeMusics";
import MusicPlayer from "./components/MusicPlayer";

const Stack = createNativeStackNavigator();

function HomeScreen() {
  const [tab, setTab] = useState("my");

  return (
    <View>
      {/* 헤더 */}
      <Header />
      {/* 바디 */}
      <View style={tools("p_3", "gap_3")}>
        {/* 탭 메뉴 */}
        <View style={tools("flx_row", "gap_2")}>
          <TouchableOpacity
            onPress={() => setTab("my")}
            style={[
              layout.tabMenu,
              tab === "my" ? tool.bg_black : tool.bg_gray10,
            ]}
          >
            <Text
              style={[
                layout.tabText,
                tab === "my" ? tool.color_brand10 : tool.color_gray50,
              ]}
            >
              내 Track
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setTab("all")}
            style={[
              layout.tabMenu,
              tab === "all" ? tool.bg_black : tool.bg_gray10,
            ]}
          >
            <Text
              style={[
                layout.tabText,
                tab === "all" ? tool.color_brand10 : tool.color_gray50,
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

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MusicPlayer" component={MusicPlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}