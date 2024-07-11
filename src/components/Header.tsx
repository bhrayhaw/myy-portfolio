import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-blue-500">Elias Media</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link></li>
            <li><Link to="/about" className="text-gray-700 hover:text-blue-500">About</Link></li>
            <li><Link to="/services" className="text-gray-700 hover:text-blue-500">Services</Link></li>
            <li><Link to="/projects" className="text-gray-700 hover:text-blue-500">Projects</Link></li>
            <li><Link to="/blog" className="text-gray-700 hover:text-blue-500">Blog</Link></li>
            <li><Link to="/contact" className="text-gray-700 hover:text-blue-500">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
