import { baseApi } from "@/redux/api/baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBooking: builder.mutation({
      query: ({ token, bookingData }) => {
        console.log("Inside Mutation - Token:", token);
        console.log("Inside Mutation - Booking Data:", bookingData);

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
  }),
});

export const { useCreateBookingMutation } = bookingApi;
