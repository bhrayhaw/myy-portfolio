import React from "react";
import img from "../assets/profile1.png";
const About: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={img}
            alt="Philip Gilbert"
            className="w-64 h-64 md:w-80 md:h-80 border-white shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
          <h2 className="text-sm text-gray-600 mb-2">ABOUT ME</h2>
          <h3 className="text-4xl font-bold mb-4">PERSONAL DETAILS</h3>
          <p className="text-lg text-gray-700 mb-8">
            Here, I focus on a range of items and features that we use in life
            without giving them a second thought, such as Coca Cola. I am a
            dedicated Full Stack Developer with a passion for building seamless
            web experiences. I enjoy tackling challenges and developing
            innovative solutions to meet user needs and business goals.
          </p>
          <button className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-lg hover:from-blue-500 hover:to-purple-600">
            VIEW FULL DETAILS
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
