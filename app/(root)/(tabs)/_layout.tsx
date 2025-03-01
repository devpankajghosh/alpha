import React from "react";
import { Tabs } from "expo-router";

import { TabBar } from "@/components";

const tabScreens = ["index", "appointment", "messages", "profile"];

const TabsLayout = () => (
  <Tabs tabBar={(props) => <TabBar {...props} />}>
    {tabScreens.map((screen) => (
      <Tabs.Screen
        key={screen}
        name={screen}
        options={{ headerShown: false }}
      />
    ))}
  </Tabs>
);

export default TabsLayout;
