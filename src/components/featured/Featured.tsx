import { motion } from "framer-motion";
import { useState } from "react";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  name: string;
  description: string;
  pricePerHour: number;
  location: string;
  image: string;
};

const Facility = ({
  name,
  description,
  pricePerHour,
  location,
  image,
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={childVariant}
      className="relative flex transform flex-col items-center justify-between rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-4 flex justify-center">
        <img
          src={image}
          alt={name}
          className={`h-32 w-32 rounded-lg object-cover transition-transform ${
            isHovered ? "scale-110 transform" : ""
          }`}
        />
      </div>

      <h4 className="text-xl font-semibold text-gray-800">{name}</h4>
      <p className="my-3 text-sm text-gray-600">{description}</p>
      <p className="text-sm font-bold text-gray-800">
        Price: ${pricePerHour} / hr
      </p>
      <p className="text-sm text-gray-600">Location: {location}</p>

      <button className="hover:bg-primary-600 mt-4 rounded-lg bg-primary-500 px-6 py-2 text-white shadow-md transition-colors">
        Book Now
      </button>
    </motion.div>
  );
};

export default Facility;
