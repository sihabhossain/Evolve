import { baseApi } from "@/redux/api/baseApi";

const facilitiesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllFacilities: builder.query({
      query: () => ({
        url: "/api/facility",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllFacilitiesQuery } = facilitiesApi;
