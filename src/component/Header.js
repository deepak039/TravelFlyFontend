import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 py-4 border-t-2 border-teal-600 rounded-t-2xl max-h-screen md:max-h-16 transition-all duration-300 ease-out ${
        isMenuOpen ? 'overflow-y-auto' : ''
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold ml-3">Your Logo</div>
        <nav
          className={`space-x-4 mr-2 flex ${
            isMenuOpen ? 'block md:hidden' : 'hidden md:flex'
          }`}
        >
          <NavLink
            to="/home"
            className="text-white border-2 py-1 px-3 rounded-3xl hover:text-orange-200 hover:border-teal-600 active:border-teal-600"
          >
            Home
          </NavLink>
          <NavLink
            to="/destinations"
            className="text-white border-2 py-1 px-3 rounded-3xl hover:text-orange-200 hover:border-teal-600"
          >
            Destinations
          </NavLink>
          <NavLink
            to="/about"
            className="text-white border-2 py-1 px-3 rounded-3xl hover:text-orange-200 hover:border-teal-600"
          >
            About Us
          </NavLink>
          <NavLink
            to="/"
            className="text-white border-2 py-1 px-3 rounded-3xl hover:text-orange-200 hover:border-teal-600"
          >
            Sign In
          </NavLink>
          {/* Add more navigation links as needed */}
        </nav>
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="sr-only">Toggle menu</span>
          {/* Hamburger menu icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;