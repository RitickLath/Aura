import { View, Text, Pressable } from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";

const Meditate = () => {
  const { text } = useLocalSearchParams();
  const press = (time) => {
    router.push({ pathname: "Playing", params: { time, text } });
  };

  return (
    <View className="bg-[#122931] h-screen flex justify-center items-center">
      <Text className="text-white text-center text-3xl font-semibold">
        Adjust Your Meditation Duration
      </Text>
      <Pressable
        onPress={() => press(10)}
        className="py-3 w-[85%] bg-white mt-4 rounded-md"
      >
        <Text className="text-black text-center font-semibold text-lg">
          10 Minutes
        </Text>
      </Pressable>

      <Pressable
        onPress={() => press(15)}
        className="py-3 w-[85%] bg-white mt-4 rounded-md"
      >
        <Text className="text-black text-center font-semibold text-lg">
          15 Minutes
        </Text>
      </Pressable>

      <Pressable
        onPress={() => press(20)}
        className="py-3 w-[85%] bg-white mt-4 rounded-md"
      >
        <Text className="text-black text-center font-semibold text-lg">
          20 Minutes
        </Text>
      </Pressable>

      <Pressable
        onPress={() => press(25)}
        className="py-3 w-[85%] bg-white mt-4 rounded-md"
      >
        <Text className="text-black text-center font-semibold text-lg">
          25 Minutes
        </Text>
      </Pressable>
    </View>
  );
};

export default Meditate;
