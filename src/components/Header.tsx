import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  const { isDarkMode, toggleMode } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="p-4 flex justify-between items-center shadow-md">
      <Link to="/" className="text-2xl font-bold text-purple-500">
        Elias Media
      </Link>
      <nav
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } flex flex-col items-start w-full mt-4 p-4 rounded-md shadow-md transition-all duration-300 md:flex md:flex-row md:items-center md:justify-center md:bg-transparent md:shadow-none md:mt-0`}
      >
        <div className="flex justify-between w-full mb-4 md:hidden">
          <div></div>
          <button
            onClick={toggleMobileMenu}
            className="text-gray-500 dark:text-gray-400"
          >
            <FontAwesomeIcon
              icon={isMobileMenuOpen ? faXmark : faBars}
              size="lg"
            />
          </button>
        </div>
        <Link
          to="/"
          className="font-bold mx-2 hover:text-purple-500 block md:inline"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="font-bold mx-2 hover:text-purple-500 block md:inline"
        >
          About
        </Link>
        <Link
          to="/services"
          className="font-bold mx-2 hover:text-purple-500 block md:inline"
        >
          Services
        </Link>
        <Link
          to="/projects"
          className="font-bold mx-2 hover:text-purple-500 block md:inline"
        >
          Projects
        </Link>
        {/* Uncomment these lines if you want to include more links */}
        {/* <Link to="/testimonials" className="font-bold mx-2 hover:text-purple-500 block md:inline">
          Testimonials
        </Link>
        <Link to="/plans" className="font-bold mx-2 hover:text-purple-500 block md:inline">
          Plans
        </Link>
        <Link to="/blog" className="font-bold mx-2 hover:text-purple-500 block md:inline">
          Blog
        </Link> */}
      </nav>
      <div className="flex items-center">
        <button
          onClick={toggleMode}
          className={`w-12 h-12 ${
            isDarkMode ? "bg-white text-purple-500" : "bg-purple-500 text-white"
          } p-2 rounded-full mr-4`}
        >
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
        </button>
        <button
          onClick={toggleMobileMenu}
          className="text-gray-500 dark:text-gray-400 md:hidden"
        >
          <FontAwesomeIcon
            icon={isMobileMenuOpen ? faXmark : faBars}
            size="lg"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
