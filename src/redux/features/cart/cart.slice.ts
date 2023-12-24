import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: { cartLength: number } = {
  cartLength: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartLength: (state, action: PayloadAction<number>) => {
      state.cartLength = action.payload;
    },
  },
});

export const { setCartLength } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
