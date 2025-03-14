import { LogoutBtn } from "@/components";
import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function Profile() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-3xl font-inter-semibold">Welcome to the Alpha</Text>
      <Link href="/sign-in">Sign In</Link>
      <Link href="/appointment">Appointment</Link>
      <Link href="/messages">Messages</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/partners/1">Partner</Link>
      <LogoutBtn />
    </View>
  );
}
