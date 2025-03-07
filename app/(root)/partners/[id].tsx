import { router, useLocalSearchParams } from "expo-router";
import { View, Text, Pressable, Image } from "react-native";

import { Back } from "@/constants/icons";

const Partner = () => {
  const { id } = useLocalSearchParams();
  return (
    <View className="bg-white flex-1">
      <View className="p-3 px-5 flex-row items-center bg-white">
        <Pressable onPress={() => router.back()}>
          <Image source={Back} className="w-8 h-8" />
        </Pressable>

        <Text className="text-center flex-1 text-primary-300 font-inter-semibold text-2xl">
          Appointment
        </Text>
      </View>

      <View className="p-5"></View>

      <View className="gap-2 px-5">
        <Text className="font-inter-semibold text-xl">Details</Text>
        <Text className="font-inter text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos vitae,
          architecto voluptatem quasi ab aut reiciendis maxime voluptatum
          provident eius deserunt nobis dolorum, ad nisi. Fugiat, sequi?
          Laboriosam, quia voluptate?
        </Text>
      </View>

      <Pressable
        android_ripple={{ color: "#0000005A" }}
        className="bg-primary-300 m-5 p-4 rounded-lg mb-5 items-center self"
      >
        <Text className="text-center text-white font-bold text-xl">
          Book an Appointment
        </Text>
      </Pressable>
    </View>
  );
};

export default Partner;
