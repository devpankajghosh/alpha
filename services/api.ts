import { config } from "@/config/config";
import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL: config.backendUrl,
  timeout: 10000, // 10 seconds timeout
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
