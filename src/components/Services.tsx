import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faPaintBrush,
  faPencilRuler,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useTheme } from "../ThemeContext";
import Testimonials from "./Testimonials";

const services = [
  {
    icon: faPaintBrush,
    title: "Web Design",
    description:
      "Crafting visually appealing and user-friendly designs with a focus on user experience and accessibility.",
  },
  {
    icon: faLaptopCode,
    title: "Web Development",
    description:
      "Building robust and scalable web applications using modern technologies and best practices.",
  },
  // {
  //   icon: faCamera,
  //   title: "Photography",
  //   description:
  //     "Providing high-quality photography services to capture stunning visuals for various needs.",
  // },
  // {
  //   icon: faCogs,
  //   title: "Automation",
  //   description:
  //     "Implementing automation solutions to streamline processes and increase efficiency.",
  // },
  // {
  //   icon: faMobileAlt,
  //   title: "Mobile App Development",
  //   description:
  //     "Creating intuitive and responsive mobile applications for both Android and iOS platforms.",
  // },
  {
    icon: faPencilRuler,
    title: "Graphic Design",
    description:
      "Designing engaging graphics for digital and print media, ensuring brand consistency and appeal.",
  },
];

const Services: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <section className="py-10 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        {/* Heading with Motion Animation */}
        <motion.h2
          className={`text-3xl sm:text-4xl font-bold mb-4 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          My Offered Services
        </motion.h2>
        <motion.p
          className={`mb-8 sm:mb-12 ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          Leveraging cutting-edge technologies and industry best practices to
          deliver top-notch solutions.
        </motion.p>

        {/* Service Cards with Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`p-4 sm:p-6 rounded-lg shadow-lg text-center bg-gray-800`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-3xl sm:text-4xl text-purple-500 mb-4">
                <FontAwesomeIcon icon={service.icon} />
              </div>
              <h3
                className={`text-lg sm:text-xl font-semibold mb-2 text-white`}
              >
                {service.title}
              </h3>
              <p
                className={`text-sm sm:text-base text-white`}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
        {/* <motion.div>
          <a
            href="/#"
            className="inline-block mt-8 px-8 py-3 bg-purple-500 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-600 transition duration-200"
          >
            Hire Me
          </a>
        </motion.div> */}
        <motion.div>
          <Testimonials />
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
