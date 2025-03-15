import api from "./api";

// Wallet topup
export async function walletTopup(data) {
  const response = await api.post("/wallet/topup", data);
  return response.data;
}
