import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/api/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    signup: builder.mutation({
      query: (newUserInfo) => ({
        url: "/api/auth/signup",
        method: "POST",
        body: newUserInfo,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = authApi;
