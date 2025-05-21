// components/WholeMusics.js
import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/layout";

export default function WholeMusics() {
  const musicList = [
    "Free Somebody - 루나",
    "Time for the moon night - 여자친구",
    "벚꽃 엔딩 - 버스커 버스커",
    "Happy - 태연",
    "비올렛타 - 아이즈원",
  ];

  return (
    <>
      {musicList.map((title, idx) => (
        <View
          key={idx}
          className="bg-white p-4 rounded-lg mb-2 flex-row justify-between items-center"
        >
          <Text className="text-black">{title}</Text>
          <Ionicons
            name="add-circle-outline"
            size={20}
            color={styles.color_brand50}
          />
        </View>
      ))}
    </>
  );
}
