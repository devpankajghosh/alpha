import axios from "axios";
import * as SecureStore from "expo-secure-store";

import { config } from "@/config/config";

const getValue = async (key: string) => {
  return await SecureStore.getItemAsync(key);
};

// Create an Axios instance
const api = axios.create({
  baseURL: config.backendUrl,
  timeout: 10000, // 10 seconds timeout
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    const token = await getValue("token");

    if (!token) {
      console.log("No token found");
      return config;
    }

    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

export default api;
