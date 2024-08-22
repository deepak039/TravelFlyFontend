import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeUser } from "../utils/userSlice";

const Header = () => {
  const logedin = useSelector((store) => store.user.loggedin);
  const userName = useSelector((store) => store.user.details?.data?.user?.name);
  const dispatch = useDispatch();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  const handleLogout = () => {
    dispatch(removeUser());
    console.log("Logged out");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 py-4 border-t-2 border-teal-600 rounded-t-2xl">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold ml-3">Your Logo</div>
        <nav className={`space-x-4 ${isMenuOpen ? 'block md:hidden' : 'hidden md:flex'}`}>
          <NavLink
            to="/home"
            className={`${logedin ? 'text-yellow-300 border-yellow-300' : 'text-white border-white'} 
              border-2 py-1 px-3 rounded-3xl hover:text-orange-200 hover:border-teal-600`}
          >
            Home
          </NavLink>

          {logedin ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="flex items-center text-yellow-300 border-yellow-300 border-2 py-1 px-3 rounded-3xl hover:text-orange-200 hover:border-teal-600"
                aria-expanded={isDropdownOpen}
              >
                {userName}
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isDropdownOpen && (
                <ul className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                  <li>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <NavLink
              to="/"
              className="text-white border-2 py-1 px-3 rounded-3xl hover:text-orange-200 hover:border-teal-600"
            >
              Sign In
            </NavLink>
          )}
        </nav>

        <button className="md:hidden" onClick={toggleMenu} aria-expanded={isMenuOpen}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMenuOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={toggleMenu}></div>}
    </header>
  );
};

export default Header;
                
