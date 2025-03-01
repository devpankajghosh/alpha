import { Pressable, ScrollView, View, Text } from "react-native";

import Card from "@/components/Card";
import { router } from "expo-router";

const AllDoctors = () => {
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
    <View className="flex-1">
      <View className="p-3 px-5 flex-row items-center bg-white">
        <Pressable onPress={() => router.back()}>
          <Text>Back</Text>
        </Pressable>

        <Text className="text-center flex-1 text-primary-300 font-inter-semibold text-2xl">
          All Therapist
        </Text>
      </View>

      <ScrollView className="p-5 flex-1 bg-white">
        {DATA.map((item) => {
          return <Card key={item._id} data={item} />;
        })}
      </ScrollView>
    </View>
  );
};

export default AllDoctors;
