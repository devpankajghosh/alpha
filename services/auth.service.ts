import api from "./api";
import { SignInFormData, SignUpFormData } from "@/interfaces";
import { role } from "@/constants/role";

// Register
export async function register(data: SignUpFormData) {
  let checkedData;

  if (data.identifier?.includes("@")) {
    // Sign up with email
    checkedData = {
      email: data.identifier,
      password: data.password,
    };
  } else {
    // Sign up with phone
    checkedData = {
      phone: data.identifier,
      password: data.password,
    };
  }

  const response = await api.post("/auth/signup", {
    ...checkedData,
    role: role.PATIENT,
  });
  return response.data;
}

// Login
export async function login(data: SignInFormData) {
  const response = await api.post("/auth/login", data);
  return response.data;
}

// Current user
export async function getCurrentUser() {
  const response = await api.get("/user/current");
  return response.data;
}

// Logout
export async function logout() {
  const response = await api.get("/auth/logout");
  return response.data;
}
