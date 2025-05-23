// components/MusicPlayer.js
import React, { useEffect, useState } from "react";
import { View, Text, Pressable, Button } from "react-native";
import { Audio } from "expo-av";
import { Accelerometer } from "expo-sensors";
import tool, { tools } from "../styles/tool";

export default function MusicPlayer() {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [subscription, setSubscription] = useState(null);

  // // 🎵 음악 준비
  // useEffect(() => {
  //   async function loadSound() {
  //     const { sound } = await Audio.Sound.createAsync(
  //       require("../assets/Ava.mp4")
  //     );
  //     setSound(sound);
  //   }
  //   loadSound();
  //   return () => {
  //     if (sound) sound.unloadAsync();
  //   };
  // }, []);

  // // 🦶 센서로 걷는지 판단
  // const handleAccelerometer = (data) => {
  //   const totalForce = Math.sqrt(
  //     data.x * data.x + data.y * data.y + data.z * data.z
  //   );

  //   if (totalForce > 1.05) {
  //     // 걷고 있다 판단
  //     if (!isPlaying && sound) {
  //       sound.playAsync();
  //       setIsPlaying(true);
  //     }
  //   } else {
  //     // 가만히 있다
  //     if (isPlaying && sound) {
  //       sound.pauseAsync();
  //       setIsPlaying(false);
  //     }
  //   }
  // };

  // // 📡 센서 연결
  // useEffect(() => {
  //   Accelerometer.setUpdateInterval(500); // 0.5초마다 데이터 확인
  //   const sub = Accelerometer.addListener(handleAccelerometer);
  //   setSubscription(sub);

  //   return () => {
  //     sub && sub.remove();
  //     setSubscription(null);
  //   };
  // }, [sound]);

  const playSound = async () => {
    console.log("🔊 Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/Ava.mp4") // 로컬 음악 파일
    );
    setSound(sound);

    console.log("▶️ Playing Sound");
    await sound.playAsync();
  };

  useEffect(() => {
    return sound
      ? () => {
          console.log("🛑 Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
  return (
    <View>
      {/* <Text>걸을 때만 음악 재생 중 🎶</Text> */}
      <Button title="음악 재생하기" onPress={playSound} />
    </View>
  );
}
