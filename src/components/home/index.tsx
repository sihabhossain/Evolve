import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <motion.section
      id="home"
      className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* MAIN HEADER */}
        <motion.div
          className="z-10 mt-32 md:basis-3/5"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* HEADINGS */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] md:before:content-evolvetext">
                <h1>
                  <span className="text-secondary-500 font-bold md:text-6xl">
                    Book Your Playtime,
                  </span>
                  <div>
                    <span>
                      Anytime – Unlock the Best Sports Facilities Near You!
                    </span>
                  </div>
                </h1>
              </div>
            </div>
            <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <NavLink to={"/facilities"}>
              <button className="rounded-lg bg-primary-500 px-6 py-3 text-white">
                Book Now
              </button>
            </NavLink>
            <AnchorLink
              className="hover:text-secondary-500 text-sm font-bold text-primary-500 underline"
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img alt="home-pageGraphic" src={HomePageGraphic} />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Home;
