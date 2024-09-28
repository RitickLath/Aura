import { View, Text, ImageBackground, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { Audio } from "expo-av";

const img = require("../../assets/simpleMeditationLogo.png");
const soundFile = require("../../assets/audio/beach.mp3");

const Playing = () => {
  const { time, text } = useLocalSearchParams();
  const [sounding, setSounding] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Cleanup the sound when the component unmounts
    return () => {
      if (sounding) {
        sound.stopAsync();
        sound.unloadAsync();
      }
    };
  }, [sounding]);

  const playSound = async () => {
    if (sounding && isPlaying) {
      // If sound is already playing, do nothing
      return;
    }
    try {
      const { sound } = await Audio.Sound.createAsync(soundFile);
      console.log(sound);
      setSounding(sound);
      setIsPlaying(true);
      await sound.playAsync();
    } catch (error) {
      console.log("Error loading sound1:", error);
    }
  };

  const stopSound = async () => {
    if (sounding) {
      try {
        await sound.stopAsync();
        await sound.unloadAsync();
        setSounding(null);
        setIsPlaying(false);
      } catch (error) {
        console.log("Error stopping sound:", error);
      }
    }
    router.push("MeditationList");
  };

  return (
    <ImageBackground source={img} className="w-full h-screen bg-[#317288]">
      <View className="flex items-center justify-end h-full">
        <Pressable
          onPress={playSound}
          className="py-3 w-[85%] bg-white mt-4 rounded-md"
        >
          <Text className="text-black text-center font-semibold text-lg">
            Start
          </Text>
        </Pressable>
        <Pressable
          onPress={stopSound}
          className="py-3 w-[85%] mb-12 bg-white mt-4 rounded-md"
        >
          <Text className="text-black text-center font-semibold text-lg">
            Stop
          </Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default Playing;
