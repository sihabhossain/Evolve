import React, { useState } from "react";
import { Eye, XCircle } from "lucide-react";
import { useCancelMyBookingMutation } from "@/redux/features/dashboard/mybookingsApi";
import { useAppSelector } from "@/redux/store/hooks";
import { useCurrentToken } from "@/redux/features/auth/authSlice";
import { toast } from "sonner";
import { useGetAllBookingsQuery } from "@/redux/features/bookings/bookingApi";

interface Facility {
  _id: string;
  name: string;
  description: string;
  pricePerHour: number;
  location: string;
  image: string;
}

interface User {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}

interface Booking {
  _id: string;
  date: string;
  startTime: string;
  endTime: string;
  user: User;
  facility: Facility;
  payableAmount: number;
  isBooked: "confirmed" | "unconfirmed" | "canceled";
}

const Bookings: React.FC = () => {
  const token = useAppSelector(useCurrentToken);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [cancelBooking] = useCancelMyBookingMutation();
  const {
    data: bookings = [],
    error,
    isLoading,
  } = useGetAllBookingsQuery(token, {
    skip: !token,
    selectFromResult: ({ data, error, isLoading }) => ({
      data: data?.data || [],
      error,
      isLoading,
    }),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading bookings</div>;

  const handleCancel = async (id: string) => {
    try {
      await cancelBooking(id).unwrap();
      toast.success("Booking canceled");
    } catch (error) {
      console.error("Failed to cancel booking:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="mb-4 text-2xl font-semibold text-gray-100">Bookings</h2>
      {/* Render table or list */}
      <div className="hidden md:block">
        <div className="rounded-lg bg-gray-800 shadow-lg">
          <table className="min-w-full divide-y divide-gray-700 text-gray-100">
            <thead className="bg-gray-700">
              <tr>
                {/* Table headers */}
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-100">
                  Date
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-100">
                  Start Time
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-100">
                  End Time
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-100">
                  User
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-100">
                  Facility
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-100">
                  Payable Amount
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-100">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {bookings.map((booking: Booking) => (
                <tr key={booking._id} className="hover:bg-gray-700">
                  {/* Table data cells */}
                  <td className="px-4 py-2 text-sm text-gray-300">
                    {booking.date}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-300">
                    {booking.startTime}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-300">
                    {booking.endTime}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-300">
                    {booking.user.name}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-300">
                    {booking.facility.name}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-300">
                    ${booking.payableAmount}
                  </td>
                  <td className="px-4 py-2 text-sm">
                    <span
                      className={`rounded-full px-3 py-1 text-sm font-semibold ${
                        booking.isBooked === "confirmed"
                          ? "bg-green-600 text-white"
                          : booking.isBooked === "unconfirmed"
                          ? "bg-yellow-500 text-black"
                          : "bg-red-600 text-white"
                      }`}
                    >
                      {booking.isBooked}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile view */}
      <div className="md:hidden">
        {bookings.map((booking: Booking) => (
          <div
            key={booking._id}
            className="mb-4 rounded-lg bg-gray-800 p-4 shadow-lg"
          >
            {/* Mobile view content */}
            <h3 className="text-lg font-semibold text-gray-100">
              {booking.facility.name}
            </h3>
            <p className="text-gray-300">Date: {booking.date}</p>
            <p className="text-gray-300">Start Time: {booking.startTime}</p>
            <p className="text-gray-300">End Time: {booking.endTime}</p>
            <p className="text-gray-300">User: {booking.user.name}</p>
            <p className="text-gray-300">
              Payable Amount: ${booking.payableAmount}
            </p>
            <p
              className={`mt-2 rounded-full px-3 py-1 text-sm font-semibold ${
                booking.isBooked === "confirmed"
                  ? "bg-green-600 text-white"
                  : booking.isBooked === "unconfirmed"
                  ? "bg-yellow-500 text-black"
                  : "bg-red-600 text-white"
              }`}
            >
              Status: {booking.isBooked}
            </p>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                className="text-blue-400 hover:text-blue-600"
                onClick={() => setSelectedBooking(booking)}
              >
                <Eye size={20} />
              </button>
              <button
                className="text-red-400 hover:text-red-600"
                onClick={() => handleCancel(booking._id)}
              >
                <XCircle size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Booking Details */}
      {selectedBooking && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-70">
          <div className="w-full max-w-lg rounded-lg bg-gray-900 p-6">
            {/* Modal content */}
            <h3 className="text-xl font-semibold text-gray-100">
              Booking Details
            </h3>
            <div className="mt-4">
              <img
                src={selectedBooking.facility.image}
                alt={selectedBooking.facility.name}
                className="h-48 w-full rounded-lg object-cover"
              />
              <p className="mt-2 text-gray-300">Date: {selectedBooking.date}</p>
              <p className="text-gray-300">
                Start Time: {selectedBooking.startTime}
              </p>
              <p className="text-gray-300">
                End Time: {selectedBooking.endTime}
              </p>
              <p className="text-gray-300">User: {selectedBooking.user.name}</p>
              <p className="text-gray-300">
                Facility: {selectedBooking.facility.name}
              </p>
              <p className="text-gray-300">
                Payable Amount: ${selectedBooking.payableAmount}
              </p>
              <p
                className={`mt-2 rounded-full px-3 py-1 text-sm font-semibold ${
                  selectedBooking.isBooked === "confirmed"
                    ? "bg-green-600 text-white"
                    : selectedBooking.isBooked === "unconfirmed"
                    ? "bg-yellow-500 text-black"
                    : "bg-red-600 text-white"
                }`}
              >
                Status: {selectedBooking.isBooked}
              </p>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                onClick={() => setSelectedBooking(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bookings;
