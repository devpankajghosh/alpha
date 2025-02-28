import api from "./api";

export async function register() {
  const response = await api.post("/auth/signup");
  return response.data;
}

export async function login() {
  const response = await api.post("/auth/login");
  return response.data;
}
