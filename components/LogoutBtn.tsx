import { useState } from "react";
import { Text, Pressable, View, Image } from "react-native";
import { useDispatch } from "react-redux";
import { router } from "expo-router";
import * as SecureStore from "expo-secure-store";

import { logout } from "@/services/auth.service";
import { logout as storeLogout } from "@/store/slices/auth.slice";
import { Loader } from "@/constants/icons";

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const remove = async (key) => {
    await SecureStore.deleteItemAsync(key);
  };

  const handleLogout = async () => {
    setLoading(true);

    try {
      const res = await logout();

      // if (!res?.success) {
      //   console.log(res?.message);
      //   return;
      // }

      remove("token");
      dispatch(storeLogout());
      router.replace("/sign-in");
    } catch (error) {
      console.log(error?.response?.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Pressable
      className={`p-4 rounded-lg mb-5 items-center w-full max-w-sm ${
        !loading ? "bg-primary-300" : "bg-secondary-300"
      }`}
      onPress={handleLogout}
      disabled={loading}
      android_ripple={{ color: "#0000005A" }}
      style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
    >
      {loading ? (
        <View className="animate-spin">
          <Image source={Loader} className="w-7 h-7" />
        </View>
      ) : (
        <Text className="text-center text-white font-bold text-xl">Logout</Text>
      )}
    </Pressable>
  );
};

export default LogoutBtn;
