import React, { useState } from "react";

interface Facility {
  id: string;
  image: string;
  name: string;
  pricePerHour: number;
  description: string;
}

const mockFacility: Facility = {
  id: "1",
  image:
    "https://plus.unsplash.com/premium_photo-1663039984787-b11d7240f592?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  name: "Tennis Court",
  pricePerHour: 30,
  description: "Outdoor tennis court with synthetic surface.",
};

const BookingPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [availability, setAvailability] = useState<string[]>([]);
  const [bookingDetails, setBookingDetails] = useState<{
    startTime: string;
    endTime: string;
  }>({
    startTime: "",
    endTime: "",
  });

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  const checkAvailability = () => {
    // Placeholder for checking availability
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

  const handleSubmit = () => {
    // Placeholder for booking submission
    alert("Booking submitted!");
  };

  return (
    <div className="container mx-auto my-20 p-4">
      {/* Facility Overview */}
      <div className="mb-6 flex flex-col rounded-lg bg-white p-4 shadow-md md:flex-row">
        <img
          src={mockFacility.image}
          alt={`Image of ${mockFacility.name}`}
          className="h-64 w-full rounded-lg object-cover md:w-1/2"
        />
        <div className="flex flex-col justify-center md:ml-6">
          <h1 className="text-3xl font-bold text-gray-800">
            {mockFacility.name}
          </h1>
          <p className="mt-2 text-gray-700">{mockFacility.description}</p>
          <p className="mt-2 text-gray-700">
            Price per hour:{" "}
            <span className="font-semibold">${mockFacility.pricePerHour}</span>
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
          >
            Confirm Booking
          </button>
        </form>
      </div>

      {/* Confirmation */}
      <div className="mt-6 rounded-lg bg-white p-4 shadow-md">
        <h2 className="mb-4 text-xl font-semibold text-gray-800">
          Booking Summary
        </h2>
        <p className="text-gray-700">Facility: {mockFacility.name}</p>
        <p className="text-gray-700">Date: {selectedDate}</p>
        <p className="text-gray-700">Start Time: {bookingDetails.startTime}</p>
        <p className="text-gray-700">End Time: {bookingDetails.endTime}</p>
      </div>
    </div>
  );
};

export default BookingPage;
