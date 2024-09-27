import { View, Text, Image } from "react-native";
import React from "react";

const AffirmationCard = ({ img, text }) => {
  return (
    <View className="mt-2 px-2">
      <Image source={img} className="w-[140px] h-[140px]" />
    </View>
  );
};

export default AffirmationCard;
