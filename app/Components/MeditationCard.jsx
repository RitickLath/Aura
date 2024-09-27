import { View, Image, Text, Pressable } from "react-native";
import React from "react";
import { router } from "expo-router";

const MeditationCard = ({ img, text }) => {
  const handlePress = () => {
    router.push("Meditate");
  };
  return (
    <Pressable onPress={handlePress}>
      <View className="w-full flex items-center mt-4">
        <Image source={img} className="w-[90%] h-[200px]" />
        <Text className="absolute top-[85px] text-white text-2xl font-semibold">
          {text}
        </Text>
      </View>
    </Pressable>
  );
};

export default MeditationCard;
