import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@/redux/store/hooks";
import { RootState } from "@/redux/store/store";
import {
  selectCurrentUser,
  useCurrentToken,
} from "@/redux/features/auth/authSlice";
import { useCreateBookingMutation } from "@/redux/features/bookings/bookingApi";
import { toast } from "sonner";

const BookingPage: React.FC = () => {
  const navigate = useNavigate();
  const token = useAppSelector(useCurrentToken);
  const user = useAppSelector(selectCurrentUser);
  const facility = useAppSelector((state: RootState) => state.booking.facility);

  const [selectedDate, setSelectedDate] = useState<string>("");
  const [availability, setAvailability] = useState<string[]>([]);
  const [bookingDetails, setBookingDetails] = useState<{
    startTime: string;
    endTime: string;
  }>({
    startTime: "",
    endTime: "",
  });
  const [confirmation, setConfirmation] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [createBooking, { isLoading, isError, error: apiError }] =
    useCreateBookingMutation();

  useEffect(() => {
    if (!facility) {
      // Redirect to home if no facility is selected
      navigate("/");
    }
  }, [facility, navigate]);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  const checkAvailability = async () => {
    if (!selectedDate) {
      setError("Please select a date to check availability.");
      return;
    }

    setError(null);
    // Simulate API call
    setAvailability(["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "3:00 PM"]);
  };

  const handleBookingDetailsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setBookingDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculatePayableAmount = () => {
    if (facility && bookingDetails.startTime && bookingDetails.endTime) {
      const start = new Date(`1970-01-01T${bookingDetails.startTime}`);
      const end = new Date(`1970-01-01T${bookingDetails.endTime}`);
      const durationInHours =
        (end.getTime() - start.getTime()) / (1000 * 60 * 60);
      return Math.ceil(durationInHours) * facility.pricePerHour;
    }
    return 0;
  };

  const handleSubmit = async () => {
    if (!token) {
      navigate("/login"); // Redirect to login page if not authenticated
      return;
    }

    if (!facility) {
      setConfirmation("Error: No facility selected.");
      return;
    }

    const bookingData = {
      date: selectedDate,
      startTime: bookingDetails.startTime + ":00",
      endTime: bookingDetails.endTime + ":00",
      user: user?._id,
      facility: facility._id,
      payableAmount: calculatePayableAmount(),
      isBooked: "confirmed",
    };

    try {
      const response = await createBooking({ token, bookingData }).unwrap();
      toast.success("Booking done");
      setConfirmation("Booking confirmed!");
      navigate("/");
    } catch (err) {
      setConfirmation(`Error: ${(err as Error).message}`);
    }
  };

  if (!facility) return null; // Redirect handled by useEffect

  return (
    <div className="container mx-auto my-20 p-4">
      {/* Facility Overview */}
      <div className="mb-6 flex flex-col rounded-lg bg-white p-4 shadow-md md:flex-row">
        <img
          src={facility.image}
          alt={`Image of ${facility.name}`}
          className="h-64 w-full rounded-lg object-cover md:w-1/2"
        />
        <div className="flex flex-col justify-center md:ml-6">
          <h1 className="text-3xl font-bold text-gray-800">{facility.name}</h1>
          <p className="mt-2 text-gray-700">{facility.description}</p>
          <p className="mt-2 text-gray-700">
            Price per hour:{" "}
            <span className="font-semibold">${facility.pricePerHour}</span>
          </p>
        </div>
      </div>

      {/* Availability Checker */}
      <div className="mb-6 rounded-lg bg-white p-4 shadow-md">
        <h2 className="mb-4 text-xl font-semibold text-gray-800">
          Check Availability
        </h2>
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="mb-4 w-full rounded-md border border-gray-300 p-2"
        />
        <button
          onClick={checkAvailability}
          className="rounded-md bg-primary-500 px-4 py-2 text-white"
        >
          Check Availability
        </button>
        {error && <p className="mt-4 text-red-600">{error}</p>}
        {availability.length > 0 && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Available Time Slots
            </h3>
            <ul className="mt-2">
              {availability.map((time, index) => (
                <li key={index} className="border-b border-gray-200 py-2">
                  {time}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Booking Form */}
      <div className="rounded-lg bg-white p-4 shadow-md">
        <h2 className="mb-4 text-xl font-semibold text-gray-800">
          Booking Form
        </h2>
        <form>
          <div className="mb-4">
            <label htmlFor="startTime" className="mb-1 block text-gray-700">
              Start Time
            </label>
            <input
              type="time"
              id="startTime"
              name="startTime"
              value={bookingDetails.startTime}
              onChange={handleBookingDetailsChange}
              className="w-full rounded-md border border-gray-300 p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="endTime" className="mb-1 block text-gray-700">
              End Time
            </label>
            <input
              type="time"
              id="endTime"
              name="endTime"
              value={bookingDetails.endTime}
              onChange={handleBookingDetailsChange}
              className="w-full rounded-md border border-gray-300 p-2"
            />
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            className="rounded-md bg-primary-500 px-4 py-2 text-white"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Confirm Booking"}
          </button>
        </form>
      </div>

      {/* Confirmation */}
      {confirmation && (
        <div className="mt-6 rounded-lg bg-white p-4 shadow-md">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            Booking Summary
          </h2>
          <p className="text-gray-700">Facility: {facility.name}</p>
          <p className="text-gray-700">Date: {selectedDate}</p>
          <p className="text-gray-700">
            Start Time: {bookingDetails.startTime}
          </p>
          <p className="text-gray-700">End Time: {bookingDetails.endTime}</p>
          <p className="mt-4 text-green-600">{confirmation}</p>
        </div>
      )}

      {isError && (
        <div className="mt-6 rounded-lg bg-red-100 p-4 shadow-md">
          <h2 className="mb-4 text-xl font-semibold text-red-800">Error</h2>
          <p className="text-red-700">
            An error occurred: {(apiError as Error).message}
          </p>
        </div>
      )}
    </div>
  );
};

export default BookingPage;
