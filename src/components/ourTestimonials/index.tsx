import { ClassType } from "@/shared/types";
import image1 from "@/assets/image1.jpg";
import image2 from "@/assets/image2.jpg";
import image3 from "@/assets/image3.avif";
import image4 from "@/assets/image4.jpg";
import image5 from "@/assets/image5.jpg";
import image6 from "@/assets/image6.jpg";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Testimonial from "./Testimonial";

const classes: Array<ClassType> = [
  {
    name: "John Doe",
    description:
      "The Weight Training Classes are exceptional! The instructors are very knowledgeable and the sessions are always well-organized. Highly recommended for anyone serious about building strength.",
    image: image1,
  },
  {
    name: "Jane Smith",
    description:
      "I absolutely love the Yoga Classes. The atmosphere is calm and relaxing, and the instructors are great at guiding you through the poses. Perfect for improving flexibility and mental well-being.",
    image: image2,
  },
  {
    name: "Emily Johnson",
    description:
      "The Ab Core Classes are fantastic! They offer a challenging workout that really targets the core muscles. The variety in exercises keeps the classes interesting and effective.",
    image: image3,
  },
  {
    name: "Michael Brown",
    description:
      "Adventure Classes are a blast! The activities are fun and engaging, and the instructors make sure everyone is safe while having a great time. Ideal for those looking to add some excitement to their routine.",
    image: image4,
  },
  {
    name: "Sarah Lee",
    description:
      "The Fitness Classes are top-notch. They provide a well-rounded workout that covers strength, cardio, and flexibility. The supportive community and energetic atmosphere make every session enjoyable.",
    image: image5,
  },
  {
    name: "David Wilson",
    description:
      "Training Classes exceeded my expectations. The comprehensive approach and the focus on technique really helped me improve my performance. Great for anyone looking to enhance their skills.",
    image: image6,
  },
];

const OurTestimonials = () => {
  return (
    <motion.section
      id="ourclasses"
      className="w-full bg-primary-100 py-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="mx-auto w-5/6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="md:w-3/5">
          <HText>OUR TESTIMONIALS</HText>
          <p className="py-5">
            Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
            tellus quam porttitor. Mauris velit euismod elementum arcu neque
            facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim
            mattis odio in risus nunc.
          </p>
        </div>
      </motion.div>
      <motion.div
        className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <ul className="flex w-[2800px] whitespace-nowrap">
          {classes.map((item: ClassType, index) => (
            <motion.li
              key={`${item.name}-${index}`}
              className="mx-4 inline-block w-[300px]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Testimonial
                name={item.name}
                description={item.description}
                image={item.image}
              />
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.section>
  );
};

export default OurTestimonials;
