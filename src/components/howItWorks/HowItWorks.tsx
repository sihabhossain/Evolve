import React from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const steps = [
  {
    step: "1",
    title: "Choose Your Turf",
    description:
      "Browse through the list of available turfs and pick the one that suits you best.",
    icon: "🟢",
  },
  {
    step: "2",
    title: "Select Date & Time",
    description: "Pick a convenient date and time for your booking.",
    icon: "📅",
  },
  {
    step: "3",
    title: "Enter Your Details",
    description:
      "Provide your contact information and any other necessary details.",
    icon: "✍️",
  },
  {
    step: "4",
    title: "Confirm & Pay",
    description:
      "Review your booking details and make the payment to confirm your booking.",
    icon: "💳",
  },
  {
    step: "5",
    title: "Get Ready to Play",
    description: "Receive a confirmation and get ready to enjoy your game!",
    icon: "🏆",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <motion.section
      className="how-it-works bg-gray-20 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto text-center">
        <motion.h2
          className="mb-8 text-3xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          How It Works
        </motion.h2>

        <motion.div
          className="lg:grid-cols-5 grid grid-cols-1 items-center gap-8 md:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {steps.map(({ step, title, description, icon }, index) => (
            <React.Fragment key={step}>
              <motion.div
                className="step-card rounded-lg bg-white p-6 shadow-md"
                initial={{ opacity: 0, y: 50 }} // Initial state
                animate={{ opacity: 1, y: 0 }} // Animated state
                transition={{
                  duration: 0.5,
                  delay: index * 0.2, // Delay for staggered animation
                }}
                whileHover={{ scale: 1.05 }} // Scale up on hover
              >
                <div className="step-icon mb-4 text-4xl">{icon}</div>
                <h3 className="mb-2 text-xl font-semibold text-gray-800">
                  {title}
                </h3>
                <p className="text-gray-600">{description}</p>
              </motion.div>

              {/* Render arrow for all but the last step */}
              {index < steps.length - 1 && (
                <motion.div
                  className="flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.5 }} // Initial state for arrow
                  animate={{ opacity: 1, scale: 1 }} // Animated state for arrow
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2 + 0.3, // Slight delay after the card
                  }}
                >
                  <ArrowRightIcon className="h-8 w-8 text-gray-400" />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HowItWorks;
