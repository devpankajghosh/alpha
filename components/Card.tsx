import { View, Text, Image, Pressable } from "react-native";

import { Heart, Star } from "@/constants/icons";
import { Doctor1 } from "@/constants/images";
import { router } from "expo-router";

const Card = ({ data }) => {
  return (
    <View className="p-4 rounded-xl flex-row gap-5 bg-primary-100 items-center mb-8">
      <View className="h-40 w-36 items-center justify-center overflow-hidden">
        <Image source={Doctor1} className="w-full h-full object-cover" />
      </View>

      <View className="gap-2 flex-1">
        <View className="flex-row gap-5 items-center justify-between">
          <Text className="font-inter-semibold text-2xl">{data.name}</Text>

          <Pressable>
            <Image source={Heart} className="w-6 h-6" />
          </Pressable>
        </View>

        <Text className="font-inter text-gray-500 mb-2">{data.details}</Text>

        <View className="flex-row items-end gap-5 justify-between">
          <View className="overflow-hidden rounded-2xl">
            <Pressable
              onPress={() => router.push(`/partners/${data._id}`)}
              android_ripple={{ color: "#0000005a" }}
              className="bg-primary-300 p-1 px-6"
            >
              <Text className="font-inter text-white text-lg">Book</Text>
            </Pressable>
          </View>

          <View className="flex-row gap-2 items-center">
            <Image source={Star} className="w-5 h-5" />
            <Text className="font-inter-semibold text-xl mt-1">
              {data.rating}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;
