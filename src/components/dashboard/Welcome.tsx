import React from "react";
import { motion } from "framer-motion";

const WelcomeMessage = ({
  userName,
}: {
  userName: string;
  avatarUrl?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6 shadow-lg"
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30 blur-xl" />

      <div className="relative z-10 flex items-center">
        <div>
          <h1 className="mb-2 text-3xl font-extrabold text-white">
            Welcome{userName ? `, ${userName}` : ""}!
          </h1>
          <p className="text-lg text-white/90">
            We are thrilled to have you here. Dive into your dashboard to manage
            your bookings and access personalized content crafted just for you.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default WelcomeMessage;
