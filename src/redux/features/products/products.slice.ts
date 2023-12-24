import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: { searchText: string } = {
  searchText: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
  },
});

export const { addSearchText } = cartSlice.actions;

export const productReducer = cartSlice.reducer;
