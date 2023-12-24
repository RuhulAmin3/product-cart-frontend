import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getFromLocalStorage } from "../../utils";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://product-cart-backend-tan.vercel.app/api/v1",
  prepareHeaders: (headers) => {
    const token = getFromLocalStorage("accessToken");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery,
  endpoints: () => ({}),
  tagTypes: ["cart"],
});
