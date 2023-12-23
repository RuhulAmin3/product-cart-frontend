import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthResponse } from "../../../types";

const token = localStorage.getItem("accessToken");

const initialState: IAuthResponse = {
  user: null,
  token: token ? token : "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<IAuthResponse>) => {
      const { token, user } = action.payload;
      state.user = user;
      state.token = token;
    },

    logOut: (state) => {
      localStorage.removeItem("accessToken");
      state.token = "";
      state.user = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;

// selector
export const selectToken = (state: { auth: { token: string } }) =>
  state.auth.token;
