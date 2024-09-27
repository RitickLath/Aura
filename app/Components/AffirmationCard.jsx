import { View, Image, Pressable } from "react-native";
import React from "react";
import { router } from "expo-router";

const AffirmationCard = ({ img, text, affirmation }) => {
  const handlePress = () => {
    router.push({ pathname: "Quote", params: { affirmation, img } });
  };
  return (
    <Pressable onPress={handlePress}>
      <View className="mt-2 px-2">
        <Image source={img} className="w-[140px] h-[140px]" />
      </View>
    </Pressable>
  );
};

export default AffirmationCard;
