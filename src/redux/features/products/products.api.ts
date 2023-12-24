import { baseApi } from "../../app/baseApi";

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (arg: Record<string, any>) => ({
        url: "/products",
        method: "GET",
        params: arg,
      }),
    }),

    getSingleProduct: builder.query({
      query: (id: string) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllProductsQuery, useGetSingleProductQuery } = productApi;
