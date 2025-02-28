import api from "./api";
import { SignUpFormData } from "@/interfaces";
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
export async function login(data) {
  const response = await api.post("/auth/login", data);
  return response.data;
}
