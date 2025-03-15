import { LogoutBtn } from "@/components";
import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function Profile() {
  return (
    <View className="flex-1 items-center justify-center bg-white gap-5">
      <Link href="/(root)/wallet">
        <Text className="text-xl">Wallet</Text>
      </Link>
      <LogoutBtn />
    </View>
  );
}
