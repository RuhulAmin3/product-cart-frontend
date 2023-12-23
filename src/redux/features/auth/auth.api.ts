import { baseApi } from "../../app/baseApi";
import { onQueryStartedCommon } from "../../utils/rtk-utils";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    userRegister: builder.mutation({
      query: (data: Record<string, string>) => ({
        url: "/auth/register",
        method: "POST",
        body: data,
      }),
      onQueryStarted: onQueryStartedCommon,
    }),

    userLogin: builder.mutation({
      query: (data: Record<string, string>) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
      onQueryStarted: onQueryStartedCommon,
    }),
  }),
});

export const { useUserLoginMutation, useUserRegisterMutation } = authApi;
