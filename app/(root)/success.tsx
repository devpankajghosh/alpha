import { Tic } from "@/constants/icons";
import { router } from "expo-router";
import { View, Text, Pressable, Image } from "react-native";

const success = () => {
  return (
    <View className="bg-white flex-1">
      <View className="flex-1 items-center justify-center">
        <View className="bg-primary-200 h-44 w-44 rounded-full mb-5 animate-bounce items-center justify-center">
          <Image source={Tic} className="w-28 h-20" />
        </View>

        <Text className="text-5xl font-semibold text-primary-300 mb-3">
          Congratulations
        </Text>
        <Text className="text-xl font-medium">
          Your Payment Is Successfully
        </Text>
      </View>

      <Pressable
        className="p-4 rounded-lg mb-5 mx-5 items-center bg-primary-300"
        onPress={() => router.replace("/(root)/(tabs)")}
        android_ripple={{ color: "#0000005A" }}
        style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
      >
        <Text className="text-center text-white font-bold text-xl">
          Got to Home
        </Text>
      </Pressable>
    </View>
  );
};

export default success;
