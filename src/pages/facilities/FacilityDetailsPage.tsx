import React from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useGetFacilityByIdQuery } from "@/redux/features/facilities/facilitiesApi";
import { setFacility } from "@/redux/features/bookings/bookingSlice";

const FacilityDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetFacilityByIdQuery(id!);

  const facility = data?.data;

  if (isLoading) return <div>Loading...</div>;
  if (error || !facility) {
    return (
      <div className="container mx-auto mt-20 p-4 text-center">
        <h1 className="text-2xl font-bold text-red-600">Facility Not Found</h1>
        <p className="mt-2 text-gray-600">
          The facility you are looking for does not exist.
        </p>
        <button
          onClick={() => navigate("/facilities")}
          className="mt-4 rounded-md bg-primary-500 px-4 py-2 text-white"
        >
          Back to Facilities
        </button>
      </div>
    );
  }

  const handleBookNow = () => {
    dispatch(setFacility(facility));
    navigate("/booking");
  };

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
                onClick={handleBookNow}
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
