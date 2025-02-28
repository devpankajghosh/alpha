import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL: "http://localhost:8090",
  timeout: 10000, // 10 seconds timeout
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
