import React from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";

interface Facility {
  id: string;
  image: string;
  name: string;
  pricePerHour: number;
  description: string;
}

const facilityData: Record<string, Facility> = {
  "1": {
    id: "1",
    image:
      "https://plus.unsplash.com/premium_photo-1663039984787-b11d7240f592?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Tennis Court",
    pricePerHour: 30,
    description: "Outdoor tennis court with synthetic surface.",
  },
  "2": {
    id: "2",
    image: "/images/swimming_pool_large.jpg",
    name: "Swimming Pool",
    pricePerHour: 50,
    description: "Olympic-sized pool with heated water.",
  },
  "3": {
    id: "3",
    image: "/images/basketball_court_large.jpg",
    name: "Basketball Court",
    pricePerHour: 40,
    description: "Indoor court with hardwood flooring.",
  },
};

const FacilityDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the facility id from URL params
  const navigate = useNavigate(); // Hook for navigation
  const facility = facilityData[id]; // Get the facility data based on the id

  if (!facility) {
    return (
      <div className="container mx-auto mt-20 p-4 text-center">
        <h1 className="text-2xl font-bold text-red-600">Facility Not Found</h1>
        <p className="mt-2 text-gray-600">
          The facility you are looking for does not exist.
        </p>
        <button
          onClick={() => navigate("/facilities")} // Navigate to the facilities listing page
          className="mt-4 rounded-md bg-primary-500 px-4 py-2 text-white"
        >
          Back to Facilities
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-20 p-4">
      <div className="flex flex-col md:flex-row">
        <img
          src={facility.image}
          alt={`Image of ${facility.name}`}
          className="h-80 w-full rounded-lg object-cover md:w-1/2"
        />
        <div className="flex flex-col justify-between p-4 md:ml-8">
          <h1 className="text-3xl font-bold text-gray-800">{facility.name}</h1>
          <p className="mt-2 text-gray-700">{facility.description}</p>
          <p className="mt-2 text-gray-700">
            Price per hour:{" "}
            <span className="font-semibold">${facility.pricePerHour}</span>
          </p>
          <div className="mt-4 flex space-x-4">
            <NavLink to={"/booking"}>
              <button
                onClick={() => console.log(`Booking facility with ID: ${id}`)} // Placeholder for booking functionality
                className="rounded-md bg-primary-500 px-4 py-2 text-white"
              >
                Book Now
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityDetailsPage;
