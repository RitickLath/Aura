import React from "react";
import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(Meditation)" options={{ title: "Home" }} />
    </Stack>
  );
};

export default Layout;
