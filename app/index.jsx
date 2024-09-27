import {
  View,
  Text,
  ImageBackground,
  Pressable,
  StatusBar,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { useRouter } from "expo-router";

const backgroundImage = require("../assets/affirmation-images/mountain-meditate-3.webp");

const Index = () => {
  const router = useRouter();
  const PressNavigate = () => {
    router.push("/MeditationList");
  };
  return (
    <SafeAreaView className="flex-1">
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        className="flex-1"
      >
        <View className="flex-1">
          <View className="flex-1 items-center mt-12">
            <Text className="text-3xl font-extrabold text-white">
              Simple Meditation
            </Text>
            <Text className="text-xl font-normal text-white mt-2">
              Simplifying Meditation for Everyone
            </Text>
          </View>
          <View className="flex-1 justify-end pb-2">
            <Pressable
              onPress={PressNavigate}
              className="flex items-center bg-white mx-4 py-3 rounded-md"
            >
              <Text className="text-black font-medium text-xl">
                Get Started
              </Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
     
    </SafeAreaView>
  );
};

export default Index;
