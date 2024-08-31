import { baseApi } from "@/redux/api/baseApi";

const mybookingsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyBookings: builder.query({
      query: (token) => ({
        url: "/api/bookings/user",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["MyBookings"],
    }),

    cancelMyBooking: builder.mutation({
      query: (id) => ({
        url: `/api/bookings/${id}`,
        method: "DELETE",
      }),
      // Invalidate the tag for refetching
      invalidatesTags: ["MyBookings"],
    }),
  }),
});

export const { useGetMyBookingsQuery, useCancelMyBookingMutation } =
  mybookingsApi;
