
import HText from "@/shared/HText";
import { FacilityType } from "@/shared/types";
import { motion } from "framer-motion";

import Facility from "./Featured";

const benefits: Array<FacilityType> = [
  {
    name: "Tennis Court",
    description: "Outdoor tennis court with synthetic surface.",
    pricePerHour: 30,
    location: "456 Sports Ave, Springfield",
    image:
      "https://img.freepik.com/free-photo/tennis-paddles-balls-arrangement_23-2149434236.jpg?t=st=1724604230~exp=1724607830~hmac=ce1ac134380a81597a04923fe7d65180ade72fa1d5869076ac4de4fae20861fc&w=1380",
  },
  {
    name: "Basketball Court",
    description: "Indoor basketball court with hardwood floor.",
    pricePerHour: 50,
    location: "789 Sports Lane, Springfield",
    image:
      "https://img.freepik.com/free-photo/vertical-shot-basketball-hoop-near-sea-beautiful-blue-sky_181624-9369.jpg?t=st=1724604277~exp=1724607877~hmac=b9b661815b8faebe080385f3e573030daa65b317d888e079f232cc230c58097c&w=740",
  },
  {
    name: "Swimming Pool",
    description: "Olympic-sized swimming pool with lap lanes.",
    pricePerHour: 40,
    location: "123 Poolside Dr, Springfield",
    image:
      "https://img.freepik.com/free-photo/summer-beach-beautiful-sky-blue_1203-5096.jpg?t=st=1724604308~exp=1724607908~hmac=5aef992b14d3b92f2734842c373639edc69792c29ae5344fabbe9199527777ad&w=1380",
  },
  {
    name: "Soccer Field",
    description: "Outdoor soccer field with natural grass.",
    pricePerHour: 60,
    location: "456 Field Rd, Springfield",
    image:
      "https://img.freepik.com/free-photo/view-soccer-player-field-with-grass_23-2150887562.jpg?t=st=1724604343~exp=1724607943~hmac=4de39c1c9260f2d3b1fcc9dee7ad899df3cd6ae04646d762001363ed8bb0ab58&w=1380",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Featured = () => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div>
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST BOOKING PLATFORM.</HText>
          <p className="my-5 text-sm">
            We provide world-class fitness equipment, trainers, and classes to
            get you to your ultimate fitness goals with ease. We take true care
            into each and every member.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-20  items-center justify-between gap-8 space-y-10 md:flex  md:space-y-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((facility) => (
            <Facility
              key={facility.name}
              name={facility.name}
              description={facility.description}
              pricePerHour={facility.pricePerHour}
              location={facility.location}
              image={facility.image}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Featured;
