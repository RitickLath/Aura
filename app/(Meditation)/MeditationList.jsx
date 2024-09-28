import { View, Text, StatusBar } from "react-native";
import React from "react";
import MeditationCard from "../Components/MeditationCard";
import { FlatList } from "react-native";
import { Link } from "expo-router";
import { Lists } from "../../constants/MeditationImports";

const MeditationList = () => {
  return (
    <View className="pb-6 bg-[#122931] pt-[90px]">
      <FlatList
        data={Lists}
        renderItem={({ item }) => (
          <MeditationCard img={item.img} text={item.text} />
        )}
      />
      <Link href="Beach">Beach</Link>
      <StatusBar translucent barStyle="light-content" />
    </View>
  );
};

export default MeditationList;
