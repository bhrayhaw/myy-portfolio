import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Header = () => {
  const { isDarkMode, toggleMode } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="p-4 flex justify-between items-center relative z-10">
      <Link to="/" className="text-2xl font-bold">
        Elias Media
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-4">
        <Link to="/" className="font-medium hover:text-purple-500">
          Home
        </Link>
        <Link
          to="/about"
          className="font-medium hover:text-purple-500"
        >
          About
        </Link>
        <Link
          to="/services"
          className="font-medium hover:text-purple-500"
        >
          Services
        </Link>
        <Link
          to="/projects"
          className="font-medium hover:text-purple-500"
        >
          Projects
        </Link>

        {/* Theme Toggle Button for Desktop */}
        <button
          onClick={toggleMode}
          className={`w-10 h-10 ${
            isDarkMode ? "bg-white text-purple-500" : "bg-purple-500"
          } p-2 rounded-full focus:outline-none`}
        >
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
        </button>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="flex items-center md:hidden">
        <button
          onClick={toggleMobileMenu}
          className={`w-10 h-10 ${
            isMobileMenuOpen
              ? "bg-white text-purple-500"
              : "bg-purple-500 text-white"
          } p-2 rounded-full focus:outline-none`}
        >
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.nav
        initial={{ x: "100%" }}
        animate={{ x: isMobileMenuOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 right-0 w-full h-screen bg-gray-800 md:hidden z-50 flex flex-col items-center"
      >
        <div className="w-full flex justify-between items-center px-4 py-4">
          <Link
            to="/"
            className="text-2xl font-bold text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Elias Media
          </Link>
          <button
            onClick={toggleMobileMenu}
            className="w-10 h-10 bg-white text-purple-500 p-2 rounded-full focus:outline-none"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <div className="flex flex-col items-center w-full mt-8 space-y-4">
          <Link
            to="/"
            className="font-medium text-white hover:text-purple-300 text-xl"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="font-medium text-white hover:text-purple-300 text-xl"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/services"
            className="font-medium text-white hover:text-purple-300 text-xl"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/projects"
            className="font-medium text-white hover:text-purple-300 text-xl"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Projects
          </Link>

          {/* Theme Toggle Button for Mobile */}
          <button
            onClick={toggleMode}
            className={`w-10 h-10 ${
              isDarkMode
                ? "bg-white text-purple-500"
                : "bg-purple-500 text-white"
            } p-2 rounded-full focus:outline-none`}
          >
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
          </button>
        </div>
      </motion.nav>
    </header>
  );
};

export default Header;
