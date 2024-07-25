import React from "react";

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/images/profile1.png"
            alt="Elijah Apreko"
            className="w-64 h-64 md:w-80 md:h-80 border-white shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
          <h2 className="text-sm text-gray-600 mb-2">ABOUT ME</h2>
          <h3 className="text-4xl font-bold mb-4">PERSONAL DETAILS</h3>
          <p className="text-lg text-gray-700 mb-8">
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
