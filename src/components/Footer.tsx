// src/components/Footer.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* About Me Section */}
        <div className="pl-8">
          <h3 className="text-xl font-bold mb-4">About Me</h3>
          <p>
            I am a dedicated Full Stack Developer with a passion for building
            seamless web experiences. I enjoy tackling challenges and developing
            innovative solutions to meet user needs and business goals.
          </p>
          <p className="mt-4">
            Copyright &copy; 2024 All rights reserved | Made with{" "}
            <span className="text-purple-500">❤</span> by Elijah Apreko
          </p>
        </div>
        {/* Newsletter Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Newsletter</h3>
          <p>Stay updated with our latest trends</p>
          <form className="mt-4 flex justify-center md:justify-start">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="p-2 rounded-l-lg border-none focus:outline-none"
            />
            <button
              type="submit"
              className="bg-purple-500 p-2 rounded-r-lg hover:bg-purple-600 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </button>
          </form>
        </div>
        {/* Follow Me Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Me</h3>
          <p>Let us be social</p>
          <div className="flex justify-center md:justify-start mt-4 space-x-4">
            <a href="#" className="hover:text-purple-500">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="hover:text-purple-500">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="hover:text-purple-500">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="hover:text-purple-500">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
