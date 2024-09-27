import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { ImageBackground } from "react-native";

const Quote = () => {
  const { affirmation, img } = useLocalSearchParams();
  return (
    <ImageBackground source={img} className="w-full h-screen">
      <View className="px-4 pt-[55%]">
        <Text className="text-white text-4xl font-semibold text-center">
          {affirmation ? affirmation : "No affirmation available"}
        </Text>
      </View>
    </ImageBackground>
  );
};

export default Quote;
