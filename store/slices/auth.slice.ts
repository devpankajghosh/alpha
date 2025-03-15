import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.status = false;
      state.user = null;
      state.token = null;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
