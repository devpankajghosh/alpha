import { Image, Pressable, Text, View } from "react-native";
import { useForm } from "react-hook-form";
import { router } from "expo-router";

import { Bell, Search } from "@/constants/icons";
import { Avatar } from "@/constants/images";
import { Carousel, Input } from "@/components";
import Card from "@/components/Card";

const Home = () => {
  const { control } = useForm();

  const DATA = {
    _id: "1",
    name: "Dr.Pawan",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt nihil eos voluptate adipisci tempora quod!",
    rating: 5.0,
  };

  return (
    <View className="flex-1 bg-white">
      {/* Topbar */}
      <View className="flex-row gap-8 items-center justify-between p-5">
        <View className="flex-row gap-5 items-center">
          <Pressable className="h-16 w-16 rounded-full items-center justify-center bg-primary-100 overflow-hidden">
            <Image
              source={Avatar}
              className="object-cover w-full h-full scale-[1.1]"
            />
          </Pressable>

          <View>
            <Text className="text-gray-500 font-inter">Hi, Welcome </Text>
            <Text className="text-black font-semibold text-xl font-inter-medium">
              John Doe William
            </Text>
          </View>
        </View>

        <Pressable className="p-2">
          <Image source={Bell} className="w-8 h-8" />
          <View className="w-3 h-3 bg-red-500 rounded-full absolute top-1 right-3" />
        </Pressable>
      </View>

      {/* Searchbar */}
      <Input
        name="search"
        control={control}
        placeholder="Search a Doctor"
        icon={<Image source={Search} className="w-6 h-6 me-2 opacity-50" />}
        containerClassName="m-5"
      />

      <Carousel />

      <View className="flex-row justify-between items-end mb-8 px-5">
        <Text className="font-inter-semibold text-3xl">All Therapist</Text>

        <Pressable onPress={() => router.push("/all-doctors")}>
          <Text className="text-gray-500 text-lg font-inter">See All</Text>
        </Pressable>
      </View>

      <View className="px-5">
        <Card data={DATA} />
      </View>
    </View>
  );
};

export default Home;
