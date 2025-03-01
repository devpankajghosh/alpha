import { View, Text, Image } from "react-native";

import { Doctor4 } from "@/constants/images";

const Carousel = () => {
  return (
    <View className="p-5 gap-5 mb-4">
      <View className="bg-primary-300 relative p-6 py-7 h-52 rounded-2xl">
        <View className="max-w-[60%]">
          <Text className="text-white font-inter-semibold text-2xl mb-2 tracking-wide">
            Medical Center
          </Text>

          <Text className="font-inter text-white tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus atque, eos nulla dolore.
          </Text>
        </View>

        <View className="h-48 w-48 absolute bottom-0 right-6">
          <Image source={Doctor4} className="h-full w-full object-cover" />
        </View>
      </View>

      <View className="flex-row gap-3 justify-center items-center">
        <View className="h-3 w-3 rounded-full bg-primary-200"></View>
        <View className="h-4 w-4 rounded-full bg-primary-300"></View>
        <View className="h-3 w-3 rounded-full bg-primary-200"></View>
        <View className="h-3 w-3 rounded-full bg-primary-200"></View>
      </View>
    </View>
  );
};

export default Carousel;
