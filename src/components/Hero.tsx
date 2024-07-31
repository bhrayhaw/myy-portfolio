import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faTwitter,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { useTheme } from "../ThemeContext";

const roles = ["SOFTWARE ENGINEER", "WEB DEVELOPER", "GRAPHIC DESIGNER"];

const Hero: React.FC = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = React.useState(0);
  const { isDarkMode } = useTheme();

  const jobTitleVariants = {
    hidden: { x: "100%" },
    visible: { x: "0%", transition: { duration: 2.5 } },
  };

  const handleNextTitle = () => {
    setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      handleNextTitle();
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentRoleIndex]);

  return (
    <section className="hero-section">
      <div className="container mx-auto flex flex-col items-center text-center">
        <div className="flex flex-col items-center pt-12">
          <img
            src="/images/profile.png"
            alt="Elijah Apreko"
            className={`w-70 h-70 rounded-full mb-4 border-4 ${
              isDarkMode ? "border-white" : ""
            } bg-gradient-to-r from-blue-400 to-purple-500 shadow-lg`}
          />
          <h1
            className={`text-2xl font-bold mb-2 ${
              isDarkMode
                ? "bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
                : ""
            } `}
          >
            I am
          </h1>
          <h2
            className={`text-2xl font-bold mb-2 ${
              isDarkMode
                ? "bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
                : ""
            } `}
          >
            Elijah Yaw Apreko
          </h2>

          <motion.h3
            key={currentRoleIndex}
            className={`text-3xl font-bold ${
              !isDarkMode
                ? "bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                : "text-white hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 hover:bg-clip-text hover:text-transparent"
            }`}
            variants={jobTitleVariants}
            initial="hidden"
            animate="visible"
          >
            {roles[currentRoleIndex]}
          </motion.h3>
        </div>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="hover:text-purple-500">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="#" className="hover:text-purple-500">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="#" className="hover:text-purple-500">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="#" className="hover:text-purple-500">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="#" className="hover:text-purple-500">
            <FontAwesomeIcon icon={faFigma} size="2x" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
