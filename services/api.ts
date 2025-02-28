import { config } from "@/config/config";
import axios from "axios";

const api = axios.create({
  baseURL: config.backendUrl,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
  timeout: 10000,
  timeoutErrorMessage: "Request timed out. Please try again later.",
});

export default api;
