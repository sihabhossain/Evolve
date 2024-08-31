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

    // Updated API call to add a new facility
    addNewFacility: builder.mutation({
      query: ({ token, facilityData }) => ({
        url: "/api/facility",
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(facilityData),
      }),
    }),
  }),
});

export const {
  useGetAllFacilitiesQuery,
  useGetFacilityByIdQuery,
  useAddNewFacilityMutation,
} = facilitiesApi;
