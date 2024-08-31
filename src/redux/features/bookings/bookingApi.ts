import { baseApi } from "@/redux/api/baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBooking: builder.mutation({
      query: ({ token, bookingData }) => {
        return {
          url: "/api/bookings",
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: bookingData,
        };
      },
    }),

    getAllBookings: builder.query({
      query: (token) => {
        return {
          url: "/api/bookings",
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
  }),
});

export const { useCreateBookingMutation, useGetAllBookingsQuery } = bookingApi;
