// src/components/Hero.tsx
import React from "react";
import { ReactTyped } from "react-typed";
import img from "../assets/profile.png";

const Hero: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20 px-4 md:px-0">
      <div className="container mx-auto text-center flex flex-col-reverse md:flex-row items-center justify-center md:justify-between">
        <div className="text-center md:text-left md:w-1/2 mt-8 md:mt-0 pl-32">
          {/* <p className="text-sm text-gray-600 mb-2">THIS IS ME</p> */}
          <h1 className="text-5xl font-bold mb-4">
            Elijah Yaw Apreko
          </h1>
          <h2 className="text-3xl font-bold text-blue-500 mb-4">
            <ReactTyped
              strings={["Full Stack Developer"]}
              typeSpeed={250}
              backSpeed={150}
              startDelay={1000}
              loop
            />
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            I am a passionate Full Stack Developer with expertise in creating
            dynamic and user-friendly web applications. I enjoy solving complex
            problems and building scalable solutions.
          </p>
          <button className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-lg hover:from-blue-500 hover:to-purple-600">
            LET'S CONNECT
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative group">
            <img
              src={ img }
              alt="Elijah Apreko"
              className="w-64 h-64 md:w-80 md:h-80 transform transition-transform duration-300 group-hover:scale-110"
            />
            <div
              className="absolute inset-0 border-4 border-blue-500 rounded-full transform transition-transform duration-300 group-hover:scale-110"
              style={{ zIndex: -1, top: "20px", left: "20px" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
