// components/MyTrack.js
import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/layout";
import tw from "tailwind-react-native-classnames";

export default function MyTrack() {
  return (
    <>
      <View className="flex-row">
        <View style={[tw`p-3`, { borderRadius: 20 }, styles.bg_gray10]}>
          <Text>🎧 오늘</Text>
          <Text className="text-base">
            <Text className="text-green-500 font-bold">0</Text> 보{" "}
            <Text className="text-green-500 font-bold">0</Text> 곡
          </Text>
        </View>
        <View className="bg-white p-5 rounded-lg mb-3">
          <Text className="text-base">🎵 내 트랙1</Text>
        </View>
        <View className="bg-white p-5 rounded-lg mb-3">
          <Text className="text-green-500 text-base">+ Premium</Text>
          <Text className="text-base">내 트랙2</Text>
        </View>
      </View>
    </>
  );
}
