import React from "react";

interface FacilityCardProps {
  id: string;
  image: string;
  name: string;
  pricePerHour: number;
  description: string;
  onViewDetails: (id: string) => void;
}

const FacilityCard: React.FC<FacilityCardProps> = ({
  id,
  image,
  name,
  pricePerHour,
  description,
  onViewDetails,
}) => {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">
      <img
        src={image}
        alt={`Image of ${name}`}
        className="h-48 w-full object-cover"
      />
      <div className="flex flex-grow flex-col p-4">
        <h2 className="text-lg font-semibold text-gray-700">{name}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
        <p className="mt-2 text-gray-600">Price per hour: ${pricePerHour}</p>
        <div className="mt-auto ">
          <button
            onClick={() => onViewDetails(id)}
            className="rounded-md bg-primary-500 px-4 py-2 text-white"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default FacilityCard;
