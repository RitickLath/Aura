import { View, Image, Text } from "react-native";
import React from "react";

const MeditationCard = ({ img, text }) => {
  return (
    <View className="w-full flex items-center mt-4">
      <Image source={img} className="w-[90%] h-[200px]" />
      <Text className="absolute top-[85px] text-white text-2xl font-semibold">
        {text}
      </Text>
    </View>
  );
};

export default MeditationCard;
