import {
  StarIcon,
  CalendarIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const features = [
  {
    name: "Easy Booking",
    description:
      "Book your favorite sports facilities in just a few clicks with our user-friendly interface.",
    icon: CalendarIcon,
  },
  {
    name: "Diverse Facilities",
    description:
      "Choose from a wide range of facilities including courts, fields, and gyms tailored to various sports.",
    icon: GlobeAltIcon,
  },
  {
    name: "Secure Transactions",
    description:
      "Enjoy secure and hassle-free transactions with our advanced payment and booking security measures.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Customer Support",
    description:
      "Get assistance anytime with our dedicated customer support team ready to help you with your bookings.",
    icon: StarIcon,
  },
];

const Benefits = () => {
  return (
    <motion.section
      className="bg-gray-20 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">
          Why choose us?
        </h2>
        <motion.div
          className="lg:grid-cols-4 grid grid-cols-1 gap-8 md:grid-cols-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              className="rounded-lg bg-white p-6 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="mb-4 flex justify-center">
                <feature.icon className="h-16 w-16 text-blue-500" />
              </div>
              <h3 className="mb-2 text-center text-xl font-semibold text-gray-800">
                {feature.name}
              </h3>
              <p className="text-center text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Benefits;
