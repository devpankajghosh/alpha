import React from "react";
import { Tabs } from "expo-router";
import { Text, View } from "react-native";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#ffffff",
          borderTopColor: "#0B8FAC1A",
          borderTopWidth: 1,
          height: 65,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => <Text>Home</Text>,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
