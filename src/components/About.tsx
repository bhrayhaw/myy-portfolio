import React from "react";
import { useTheme } from "../ThemeContext";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython,
} from "react-icons/fa"; // Font Awesome Icons
import { DiDjango, DiMongodb } from "react-icons/di"; // Devicons
import { SiTypescript, SiFirebase } from "react-icons/si"; // Devicons
import { BiLogoPostgresql } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";


const technologies = [
  { name: "HTML", logo: <FaHtml5 /> },
  { name: "CSS", logo: <FaCss3Alt /> },
  { name: "JavaScript", logo: <FaJs /> },
  { name: "TypeScript", logo: <SiTypescript /> },
  { name: "React", logo: <FaReact /> },
  { name: "Node.js", logo: <FaNodeJs /> },
  { name: "MongoDB", logo: <DiMongodb /> },
  { name: "Git", logo: <FaGitAlt /> },
  { name: "Python", logo: <FaPython /> },
  { name: "Django", logo: <DiDjango /> },
  { name: "PostgreSQL", logo: <BiLogoPostgresql /> },
  { name: "Next.js", logo: <RiNextjsFill /> },
  { name: "Firebase", logo: <SiFirebase /> },
  // Add more technologies here
];

const About: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <section className="py-10 md:py-20">
      <div className="container mx-auto flex flex-col items-center justify-center px-4 md:px-0">
        {/* Personal Details with Framer Motion Animation */}
        <motion.div
          className="w-full text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2
            className={`text-sm md:text-base lg:text-lg mb-2 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            ABOUT ME
          </h2>
          <h3
            className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-4 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            PERSONAL DETAILS
          </h3>
          <motion.p
            className={`w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto text-base md:text-lg lg:text-xl mb-6 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            I am a passionate Full Stack Developer with expertise in creating
            dynamic and user-friendly web applications. I enjoy solving complex
            problems and building scalable solutions. I have a strong foundation
            in web development technologies and programming languages including
            HTML, CSS, JavaScript, React, Node.js, and MongoDB. I am also
            proficient in using version control systems like Git and have
            experience working with Agile methodologies. I am a quick learner
            and a team player with excellent communication skills. I am seeking
            a challenging role in a reputable organization where I can leverage
            my skills to drive innovation and deliver high-quality solutions.
          </motion.p>
          <motion.a
            href={import.meta.env.VITE_RESUME} // Replace with your actual resume path
            download
            className="mt-4 inline-block px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-lg hover:from-blue-500 hover:to-purple-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            DOWNLOAD RESUME
          </motion.a>
        </motion.div>
      </div>

      {/* Technologies Section with Animation */}
      <motion.div
        className="container mx-auto mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
      >
        <h3
          className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Technologies I Use
        </h3>
        <div className="flex flex-wrap justify-center items-center">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="m-4 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.2 }}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl mb-2">
                {tech.logo}
              </div>
              <p
                className={`text-base md:text-lg lg:text-xl ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {tech.name}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
