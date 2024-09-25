import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Index" }} />
      <Stack.Screen name="Home" options={{ title: "Home" }} />
      <Stack.Screen name="Profile" options={{ title: "About" }} />
    </Stack>
  );
};

export default Layout;
