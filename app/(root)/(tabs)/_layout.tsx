import React from "react";
import { Tabs } from "expo-router";

import { TabBar } from "@/components";

const TabsLayout = () => {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="appointment"
        options={{
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="messages"
        options={{
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
