import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Home = () => {
  return (
    <View>
      <Text className="m-6">Home</Text>
      <Link href="/">Go To Index Screen</Link>
    </View>
  );
};

export default Home;
