import { router, useLocalSearchParams } from "expo-router";
import { View, Text, Pressable, Image } from "react-native";

import { Back, MessageCircle, Phone, Video } from "@/constants/icons";
import { Doctor5 } from "@/constants/images";
import { useSelector } from "react-redux";

const Partner = () => {
  const { user } = useSelector((state) => state.auth);
  // const { id } = useLocalSearchParams();

  const handleBooking = async () => {
    console.log(user);
    if (user?.wallet > 0) {
      router.push("/(root)/payment");
      return;
    }

    router.push("/wallet");
  };

  return (
    <View className="bg-white h-full">
      <View className="p-3 px-5 flex-row items-center bg-white">
        <Pressable onPress={() => router.back()}>
          <Image source={Back} className="w-8 h-8" />
        </Pressable>

        <Text className="text-center flex-1 text-primary-300 font-inter-semibold text-2xl">
          Appointment
        </Text>
      </View>

      <View className="flex-1">
        <View className="p-5 flex-row gap-6 mb-5">
          <Image source={Doctor5} className="h-28 w-28" />

          <View className="gap-5 flex-1">
            <View className="gap-2 flex-row">
              <View className="gap-1 flex-1">
                <Text className="font-inter-semibold text-2xl">Dr.Upul</Text>
                <Text className="font-inter text-primary-300">Therapist</Text>
              </View>

              <View className="flex-row gap-5">
                <View className="overflow-hidden rounded-full h-10 w-10">
                  <Pressable
                    android_ripple={{ color: "#0000001A" }}
                    className="p-1 rounded-full h-10 w-10 bg-primary-200 items-center justify-center"
                  >
                    <Image source={MessageCircle} className="w-6 h-6" />
                  </Pressable>
                </View>

                <View className="overflow-hidden rounded-full h-10 w-10">
                  <Pressable
                    android_ripple={{ color: "#0000001A" }}
                    className="p-1 rounded-full h-10 w-10 bg-primary-200 items-center justify-center"
                  >
                    <Image source={Phone} className="w-6 h-6" />
                  </Pressable>
                </View>

                <View className="overflow-hidden rounded-full h-10 w-10">
                  <Pressable
                    android_ripple={{ color: "#0000001A" }}
                    className="p-1 rounded-full h-10 w-10 bg-primary-200 items-center justify-center"
                  >
                    <Image source={Video} className="w-6 h-6" />
                  </Pressable>
                </View>
              </View>
            </View>

            <View className="gap-1 flex-row items-center justify-between">
              <Text className="font-inter-medium text-xl">Payment</Text>
              <Text className="font-inter-semibold text-xl text-primary-300">
                ₹ 400.00
              </Text>
            </View>
          </View>
        </View>

        <View className="gap-2 px-5 mb-10">
          <Text className="font-inter-semibold text-xl">Details</Text>
          <Text className="font-inter text-gray-500 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos vitae,
            architecto voluptatem quasi ab aut reiciendis maxime voluptatum
            provident eius deserunt nobis dolorum, ad nisi. Fugiat, sequi?
            Laboriosam, quia voluptate?
          </Text>
        </View>

        <View className="flex-row justify-between items-end mb-6 px-5">
          <Text className="font-inter-semibold text-2xl">Working Hours</Text>

          <Pressable onPress={() => {}}>
            <Text className="text-gray-500 text-lg font-inter">See All</Text>
          </Pressable>
        </View>

        <View className="flex-row ps-5 gap-3 mb-6">
          {["10.00 AM", "11.00 AM", "12.00 PM"].map((time) => (
            <Pressable
              key={time}
              className="bg-primary-100 rounded-lg p-4 w-32 items-center justify-center"
            >
              <Text className="text-lg">{time}</Text>
            </Pressable>
          ))}
        </View>

        <View className="flex-row justify-between items-end mb-6 px-5">
          <Text className="font-inter-semibold text-2xl">Date</Text>

          <Pressable onPress={() => {}}>
            <Text className="text-gray-500 text-lg font-inter">See All</Text>
          </Pressable>
        </View>

        <View className="flex-row ps-5 gap-3 mb-6">
          {["Sun 4", "Mon 5", "Tue 6"].map((time) => (
            <Pressable
              key={time}
              className="bg-primary-100 rounded-lg p-4 w-32 items-center justify-center"
            >
              <Text className="text-lg">{time}</Text>
            </Pressable>
          ))}
        </View>
      </View>

      <Pressable
        className="p-4 rounded-lg mb-5 mx-5 items-center bg-primary-300"
        onPress={handleBooking}
        android_ripple={{ color: "#0000005A" }}
        style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
      >
        <Text className="text-center text-white font-bold text-xl">
          Book an Appointment
        </Text>
      </Pressable>
    </View>
  );
};

export default Partner;
