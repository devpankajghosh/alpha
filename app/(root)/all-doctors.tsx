import { Pressable, ScrollView, View, Text, Image } from "react-native";
import { router } from "expo-router";
import { useForm } from "react-hook-form";

import Card from "@/components/Card";
import { Back, Search } from "@/constants/icons";
import { Input } from "@/components";

const AllDoctors = () => {
  const { control } = useForm();
  const DATA = [
    {
      _id: "1",
      name: "Dr.Pawan",
      details:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt nihil eos voluptate adipisci tempora quod!",
      rating: 5.0,
    },
    {
      _id: "2",
      name: "Dr.Pawan",
      details:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt nihil eos voluptate adipisci tempora quod!",
      rating: 5.0,
    },
    {
      _id: "3",
      name: "Dr.Pawan",
      details:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt nihil eos voluptate adipisci tempora quod!",
      rating: 5.0,
    },
    {
      _id: "4",
      name: "Dr.Pawan",
      details:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt nihil eos voluptate adipisci tempora quod!",
      rating: 5.0,
    },
    {
      _id: "5",
      name: "Dr.Pawan",
      details:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt nihil eos voluptate adipisci tempora quod!",
      rating: 5.0,
    },
    {
      _id: "6",
      name: "Dr.Pawan",
      details:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt nihil eos voluptate adipisci tempora quod!",
      rating: 5.0,
    },
    {
      _id: "7",
      name: "Dr.Pawan",
      details:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt nihil eos voluptate adipisci tempora quod!",
      rating: 5.0,
    },
    {
      _id: "8",
      name: "Dr.Pawan",
      details:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt nihil eos voluptate adipisci tempora quod!",
      rating: 5.0,
    },
    {
      _id: "9",
      name: "Dr.Pawan",
      details:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt nihil eos voluptate adipisci tempora quod!",
      rating: 5.0,
    },
    {
      _id: "XX",
      name: "Dr.Pawan",
      details:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt nihil eos voluptate adipisci tempora quod!",
      rating: 5.0,
    },
  ];

  return (
    <View className="flex-1 bg-white">
      <View className="p-3 px-5 flex-row items-center bg-white">
        <Pressable onPress={() => router.back()}>
          <Image source={Back} className="w-8 h-8" />
        </Pressable>

        <Text className="text-center flex-1 text-primary-300 font-inter-semibold text-2xl">
          All Therapist
        </Text>
      </View>

      <Input
        name="search"
        control={control}
        placeholder="Search a Doctor"
        icon={<Image source={Search} className="w-6 h-6 me-2 opacity-50" />}
        containerClassName="p-5"
      />

      <ScrollView className="p-5 flex-1">
        {DATA.map((item) => {
          return <Card key={item._id} data={item} />;
        })}
      </ScrollView>
    </View>
  );
};

export default AllDoctors;
