import React from 'react';
import { Sun, Moon, Car } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Car className="w-8 h-8 text-yellow-500" />
          <span className="text-2xl font-bold text-gray-800 dark:text-white">SwiftRide</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-500 transition-colors duration-300">Home</Link></li>
            <li><Link to ="/services" className="text-gray-600 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-500 transition-colors duration-300">Services</Link></li>
            <li><Link to="/booknow" className="text-gray-600 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-500 transition-colors duration-300">Book Now</Link></li>
            <li><Link to="/login" className="text-gray-600 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-500 transition-colors duration-300">Login</Link></li>
            <li><Link to="/signup" className="text-gray-600 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-500 transition-colors duration-300">Signup</Link></li>
          </ul>
        </nav>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-300"
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>
    </header>
  );
};

export default Header;