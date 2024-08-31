import { baseApi } from "@/redux/api/baseApi";

const facilitiesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Existing API call to get all facilities
    getAllFacilities: builder.query({
      query: () => ({
        url: "/api/facility",
        method: "GET",
      }),
    }),
    // New API call to get a facility by ID
    getFacilityById: builder.query({
      query: (id: string) => ({
        url: `/api/facility/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllFacilitiesQuery, useGetFacilityByIdQuery } =
  facilitiesApi;
