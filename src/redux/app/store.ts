import { cartReducer } from "./../features/cart/cart.slice";
import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./baseApi";
import { productReducer } from "../features/products/products.slice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    cart: cartReducer,
    product: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
