import api from "./api";

// Upadate name
export async function updateName(data: { name: string }) {
  const response = await api.patch("/myaccount/name", data);
  return response.data;
}

// Upadate email
export async function updateEmail(data: { email: string }) {
  const response = await api.patch("/myaccount/email", data);
  return response.data;
}

// Get all booking
export async function getAllBooking() {
  const response = await api.get("/booking/list");
  return response.data;
}

// Get all transection
export async function getAllTransection() {
  const response = await api.get("/transaction/currentuser");
  return response.data;
}
