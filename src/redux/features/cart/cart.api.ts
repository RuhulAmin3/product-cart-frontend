import { baseApi } from "../../app/baseApi";

export const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    AddToCart: builder.mutation({
      query: (data: Record<string, any>) => ({
        url: "/cart",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["cart"],
    }),

    getAllCartProd: builder.query({
      query: () => ({
        url: "/cart",
        method: "GET",
      }),
      providesTags: ["cart"],
    }),

    getSingleCartProd: builder.query({
      query: (id: string) => ({
        url: `/cart/${id}`,
        method: "GET",
      }),
      providesTags: ["cart"],
    }),

    updateCartProd: builder.mutation({
      query: ({
        id,
        data,
      }: {
        id: string;
        data: Record<string, number | string>;
      }) => ({
        url: `/cart/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["cart"],
    }),

    deleteCartProd: builder.mutation({
      query: (id: string) => ({
        url: `/cart/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["cart"],
    }),
  }),
});

export const {
  useAddToCartMutation,
  useGetAllCartProdQuery,
  useGetSingleCartProdQuery,
  useUpdateCartProdMutation,
  useDeleteCartProdMutation,
} = cartApi;
