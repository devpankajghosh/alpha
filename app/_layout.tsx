import { useEffect } from "react";
import { router, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";

import "./global.css";
import store from "@/store/store";
import { getCurrentUser } from "@/services/auth.service";
import {
  logout as storeLogout,
  login as storeLogin,
} from "@/store/slices/auth.slice";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Inter-Light": require("../assets/fonts/Inter-Light.ttf"),
    "Inter-Regular": require("../assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("../assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("../assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("../assets/fonts/Inter-Bold.ttf"),
  });

  useEffect(() => {
    getCurrentUser()
      .then((res) => {
        if (!res) {
          router.replace("/sign-in");
          return;
        }

        store.dispatch(storeLogin(res?.data));
        router.replace("/(root)/(tabs)");
      })
      .catch((error) => {
        console.log(error.response.data);
        store.dispatch(storeLogout());
        router.replace("/sign-in");
      })
      .finally(() => {
        if (!fontsLoaded) return null;
        SplashScreen.hideAsync();
      });
  }, [fontsLoaded]);

  return (
    <SafeAreaView className="flex-1">
      <StatusBar style="inverted" />
      <Provider store={store}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </Provider>
    </SafeAreaView>
  );
}
