import api from "./api";

// Create Appointment
export async function createAppointment(data) {
  const response = await api.post("/booking/new", data);
  return response.data;
}
