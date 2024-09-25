import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Index = () => {
  return (
    <View>
      <Text>Hello World</Text>
      <Link href="/Profile">Go To About Screen</Link>
      <Link href="/Home">Go To Home Screen</Link>
      <Link href="/">Go To Index Screen</Link>
    </View>
  );
};

export default Index;
