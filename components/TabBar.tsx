import { Image, View } from "react-native";
import { PlatformPressable } from "@react-navigation/elements";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

import {
  Clock,
  ClockDark,
  House,
  HouseDark,
  Message,
  MessageDark,
  Profile,
  ProfileDark,
} from "@/constants/icons";

const icons: Record<string, { active: any; inactive: any }> = {
  index: { active: House, inactive: HouseDark },
  appointment: { active: Clock, inactive: ClockDark },
  messages: { active: Message, inactive: MessageDark },
  profile: { active: Profile, inactive: ProfileDark },
};

const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  return (
    <View className="absolute w-full bottom-0 flex-row justify-center items-center bg-white p-3 gap-10">
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const { options } = descriptors[route.key];

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        return (
          <View
            key={route.key}
            className={`rounded-xl overflow-hidden ${
              isFocused ? "bg-primary-300" : ""
            }`}
          >
            <PlatformPressable
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarButtonTestID}
              onPress={onPress}
              className="p-3"
            >
              <Image
                source={
                  isFocused
                    ? icons[route.name]?.active
                    : icons[route.name]?.inactive
                }
                className="w-7 h-7"
              />
            </PlatformPressable>
          </View>
        );
      })}
    </View>
  );
};

export default TabBar;
