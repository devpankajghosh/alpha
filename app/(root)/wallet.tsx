import { useState } from "react";
import { router } from "expo-router";
import { View, Text, Pressable, Image } from "react-native";
import { useForm } from "react-hook-form";

import { Back, Loader } from "@/constants/icons";
import { Input } from "@/components";
import { walletTopup } from "@/services/wallet.service";

const Wallet = () => {
  const [loading, setLoading] = useState(false);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      amount: "1000",
    },
  });

  const handleWalletTopup = async (data) => {
    setLoading(true);

    try {
      const res = await walletTopup({
        amount: Number(data.amount),
      });

      if (!res?.success) {
        console.log(res?.message);
        return;
      }

      router.back();
    } catch (error) {
      console.log(error?.response?.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="bg-white h-full">
      <View className="p-3 px-5 flex-row items-center bg-white">
        <Pressable onPress={() => router.back()}>
          <Image source={Back} className="w-8 h-8" />
        </Pressable>

        <Text className="text-center flex-1 text-primary-300 font-inter-semibold text-2xl">
          Wallet
        </Text>
      </View>

      <View className="flex-1">
        <Text className="font-inter-semibold text-2xl px-5 mb-5">
          Add money to Wallet
        </Text>

        <Input
          name="amount"
          placeholder="Enter amount"
          containerClassName="mb-6 px-5"
          editable={!loading}
          control={control}
        />

        <View className="flex-row ps-5 gap-3 mb-6">
          {["+₹500", "+₹1000", "+₹1500"].map((time) => (
            <Pressable
              key={time}
              className="bg-primary-100 rounded-lg p-4 w-32 items-center justify-center"
            >
              <Text className="text-lg">{time}</Text>
            </Pressable>
          ))}
        </View>

        <Text className="px-5 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          aperiam, fugiat, sed labore harum, illum earum at provident natus sunt
          cupiditate? Odit porro dolores id alias debitis ipsum adipisci
          commodi. aperiam, fugiat, sed labore harum, illum earum at provident
          natus sunt cupiditate? Odit porro dolores id alias debitis ipsum
          adipisci commodi.
        </Text>
      </View>

      <Pressable
        className={`p-4 rounded-lg mb-5 mx-5 items-center ${
          !loading ? "bg-primary-300" : "bg-secondary-300"
        }`}
        onPress={handleSubmit(handleWalletTopup)}
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
            Add Money
          </Text>
        )}
      </Pressable>
    </View>
  );
};

export default Wallet;
