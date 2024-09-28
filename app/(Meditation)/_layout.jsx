import React from "react";
import { Tabs } from "expo-router";

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="MeditationList"
        options={{ headerShown: false, title: "Meditation" }}
      />
      <Tabs.Screen
        name="AffirmationList"
        options={{ headerShown: false, title: "Affirmation" }}
      />
      <Tabs.Screen
        name="Meditate"
        options={{ headerShown: false, href: null }}
      />
      <Tabs.Screen name="Quote" options={{ headerShown: false, href: null }} />

      <Tabs.Screen
        name="Playing"
        options={{ headerShown: false, href: null }}
      />
    </Tabs>
  );
};

export default Layout;
