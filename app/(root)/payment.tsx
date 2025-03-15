import { useState } from "react";
import { View, Text, Pressable, Image } from "react-native";
import { router } from "expo-router";

import { createAppointment } from "@/services/booking.service";
import { Back, Loader } from "@/constants/icons";

const Payment = () => {
  const [loading, setLoading] = useState(false);

  let physiotherapist_user_id = "d58c5b78-324d-4c62-9297-51daad92efa8";
  let date_time = "2025-03-18T15:30:00Z";

  const confirmPayment = async () => {
    setLoading(true);
    try {
      const res = await createAppointment({
        physiotherapist_user_id,
        date_time,
      });

      if (!res?.success) {
        console.log(res?.message);
        return;
      }

      router.replace("/(root)/success");
    } catch (error) {
      console.log(error?.response?.data);
    } finally {
      setLoading(false);
    }
  };
  return (
    <View className="bg-primary-300 flex-1 justify-between">
      <View className="p-3 px-5 flex-row items-center">
        <Pressable
          onPress={() => router.back()}
          className="bg-white rounded-full p-2"
        >
          <Image source={Back} className="w-8 h-8" />
        </Pressable>

        <Text className="text-center flex-1 text-white font-inter-semibold text-2xl">
          Payment
        </Text>
      </View>

      <Text className="text-center text-5xl font-semibold text-white">
        ₹ 400.00
      </Text>

      <View className="h-4/6 bg-white rounded-s-2xl px-5 pt-5">
        <View className="flex-1">
          <Text className="text-center text-xl font-semibold mb-5">
            Therapist Chanaling Payment Method
          </Text>

          <View className="flex-row gap-3 mb-6">
            {["Card", "Cash", "Wallet"].map((time) => (
              <Pressable
                key={time}
                className="bg-primary-100 rounded-lg p-4 w-32 items-center justify-center"
              >
                <Text className="text-lg">{time}</Text>
              </Pressable>
            ))}
          </View>

          <Text className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
            sit possimus aliquam fugiat quam magnam ab laboriosam itaque ipsam
            cupiditate culpa mollitia, ut inventore veritatis. Quasi nulla
            quaerat rem perspiciatis. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Repellendus vero possimus temporibus placeat
            autem.
          </Text>
        </View>

        <Pressable
          className={`p-4 rounded-lg mb-5 items-center ${
            !loading ? "bg-primary-300" : "bg-secondary-300"
          }`}
          onPress={confirmPayment}
          disabled={loading}
          android_ripple={{ color: "#0000005A" }}
          style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
        >
          {loading ? (
            <View className="animate-spin">
              <Image source={Loader} className="w-7 h-7" />
            </View>
          ) : (
            <Text className="text-center text-white font-bold text-xl">
              Pay Now
            </Text>
          )}
        </Pressable>
      </View>
    </View>
  );
};

export default Payment;
