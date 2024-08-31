// baseApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://sports-fecility-booking-system.vercel.app",
  }),
  tagTypes: ["MyBookings"],
  endpoints: () => ({}),
});
