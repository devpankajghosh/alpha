import api from "./api";

// Get Physio by id
export async function getPhysioById(id: string) {
  const response = await api.get(`/user/getphysio?id=${id}`);
  return response.data;
}
