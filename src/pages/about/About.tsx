import React from "react";
import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  UsersIcon,
  FlagIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

// Example team members data
const teamMembers = [
  {
    name: "Jane Doe",
    role: "Founder & CEO",
    photo:
      "https://img.freepik.com/free-photo/side-view-businessman-with-laptop-desk_23-2147876690.jpg?t=st=1724660658~exp=1724664258~hmac=3d5d50c1b162e30280d155d1c01e22814285bc8d09388855366f35fc13474c76&w=1380",
    bio: "Jane has over 20 years of experience in sports management and is passionate about providing accessible sports facilities.",
  },
  {
    name: "John Smith",
    role: "CTO",
    photo:
      "https://img.freepik.com/free-photo/portrait-businessman-holding-clipboard_23-2147838565.jpg?t=st=1724660679~exp=1724664279~hmac=3c09935a3ec7cd2ba730fa78eeebac5cbb6e211e8bf90b8b5ecee58b0c848674&w=826",
    bio: "John is an expert in technology and innovation, ensuring our platform is user-friendly and cutting-edge.",
  },
  // Add more team members as needed
];

const AboutPage = () => {
  return (
    <div>
      {/* Mission Statement */}
      <section className="bg-gray-20 py-16">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="mb-4 text-3xl font-bold text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Mission
          </motion.h2>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our mission is to provide an easy-to-use platform that connects
            people with high-quality sports facilities, promoting active
            lifestyles and community engagement.
          </motion.p>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-primary-100 py-16">
        <div className="container mx-auto px-6">
          <motion.h2
            className="mb-12 text-center text-3xl font-bold text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Meet the Team
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-8">
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                className="w-full rounded-lg bg-white p-6 text-center shadow-lg md:w-1/3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className="mx-auto mb-4 h-32 w-32 rounded-full"
                />
                <h3 className="mb-2 text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="mb-4 text-gray-600">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History & Milestones */}
      <section className="bg-gray-20 py-16">
        <div className="container mx-auto px-6">
          <motion.h2
            className="mb-12 text-center text-3xl font-bold text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our History & Milestones
          </motion.h2>
          <div className="space-y-8">
            {[
              {
                title: "Founded in 2020",
                description:
                  "We started our journey with the goal of revolutionizing sports facility booking by making it easier and more accessible.",
              },
              {
                title: "Reached 1,000 Users in 2021",
                description:
                  "Our platform quickly gained traction and reached a significant milestone with over 1,000 active users.",
              },
              // Add more milestones as needed
            ].map((milestone, index) => (
              <motion.div
                key={index}
                className="rounded-lg bg-white p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-4 flex items-center">
                  <FlagIcon className="mr-4 h-8 w-8 text-blue-500" />
                  <h3 className="text-xl font-semibold text-gray-800">
                    {milestone.title}
                  </h3>
                </div>
                <p className="text-gray-600">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-gray-20 py-16">
        <div className="container mx-auto px-6">
          <motion.h2
            className="mb-12 text-center text-3xl font-bold text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: PhoneIcon,
                title: "Phone",
                detail: "(123) 456-7890",
              },
              {
                icon: EnvelopeIcon,
                title: "Email",
                detail: "info@sportsbooking.com",
              },
              {
                icon: AcademicCapIcon,
                title: "Address",
                detail: "123 Sports St, Suite 100, Sportstown, ST 12345",
              },
            ].map((contact, index) => (
              <motion.div
                key={index}
                className="rounded-lg bg-white p-6 text-center shadow-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <contact.icon className="mb-4 h-8 w-8 text-blue-500" />
                <h3 className="mb-2 text-xl font-semibold text-gray-800">
                  {contact.title}
                </h3>
                <p className="text-gray-600">{contact.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
