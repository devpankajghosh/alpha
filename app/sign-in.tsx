import { useState } from "react";
import { ScrollView, Text, Pressable, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useForm } from "react-hook-form";
import { router } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { useDispatch } from "react-redux";

import { Input } from "@/components";
import { SignInFormData } from "@/interfaces";
import { login } from "@/services/auth.service";
import { Loader } from "@/constants/icons";

const SignIn = () => {
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm<SignInFormData>();
  const [loading, setLoading] = useState(false);

  const save = async (key, value) => {
    await SecureStore.setItemAsync(key, value);
  };

  // Sign in handler
  const handleSignIn = async (data: SignInFormData) => {
    setLoading(true);

    try {
      const res = await login(data);

      if (!res?.success) {
        console.log(res?.message);
        return;
      }

      save("token", res?.data?.token);
      router.replace("/(root)/(tabs)");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1">
        <View className="px-6 py-7">
          <Text className="text-center text-3xl font-bold text-primary-300 mb-10">
            Welcome
          </Text>

          <Text className="text-3xl font-bold mb-3">Sign in</Text>

          <Text className="text-lg text-gray-500 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Text>

          <Input
            label="Email or Phone"
            name="email_or_phone"
            placeholder="Enter your email or phone"
            containerClassName="mb-6"
            editable={!loading}
            control={control}
            rules={{
              required: "Email or phone is required",
              pattern: {
                value:
                  /^(?:[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|\d{10})$/,
                message: "Enter a valid email address or phone",
              },
            }}
          />

          <Input
            label="Password"
            name="password"
            secureTextEntry
            placeholder="Enter your password"
            containerClassName="mb-10"
            editable={!loading}
            control={control}
            rules={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
              maxLength: {
                value: 20,
                message: "Password must be at most 20 characters",
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/,
                message:
                  "Password must contain at least one uppercase letter, one lowercase letter, and one number",
              },
            }}
          />

          <Pressable onPress={() => router.push("/forgot-password")}>
            <Text className="mb-6 text-lg font-semibold self-end">
              Forgot Password?
            </Text>
          </Pressable>

          <Pressable
            className={`p-4 rounded-lg mb-5 items-center ${
              !loading ? "bg-primary-300" : "bg-secondary-300"
            }`}
            onPress={handleSubmit(handleSignIn)}
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
                Sign In
              </Text>
            )}
          </Pressable>

          <View className="flex-row justify-center items-center gap-2">
            <Text className="text-gray-500 text-lg">
              Don't have an account?
            </Text>

            <Pressable onPress={() => router.push("/sign-up")}>
              <Text className="text-primary-300 font-semibold text-lg">
                Sign up
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
