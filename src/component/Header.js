import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeUser } from '../utils/userSlice';
import { useNavigate } from "react-router-dom";

const Header = () => {
  const isLoggedIn = useSelector((store) => store.user.loggedin);
  const userName = useSelector((store) => store.user.details?.data?.user?.name);
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogout = () => {
    dispatch(removeUser());
    navigate('/');
    // console.log('Logged out');

  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-orange-600 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <NavLink to="/" className="text-white text-2xl font-bold">
          TravelFly
        </NavLink>
        <nav className="hidden md:flex space-x-4">
          <NavLink
            to="/blog"
            className="text-white hover:text-teal-300 transition-colors duration-300"
          >
            Blog
          </NavLink>
          <NavLink
            to="/search"
            className="text-white hover:text-teal-300 transition-colors duration-300"
          >
            Explore
          </NavLink>
          {isLoggedIn ? (
            <>
              <NavLink
                to="/blog/create"
                className="text-white hover:text-teal-300 transition-colors duration-300"
              >
                Create Blog
              </NavLink>
              <button
                className="text-white hover:text-teal-300 transition-colors duration-300"
                onClick={handleLogout}
              >
                Logout
              </button>
              <span className="text-teal-300 font-semibold">{userName}</span>
            </>
          ) : (
            <>
              <NavLink
                to="/"
                className="text-white hover:text-teal-300 transition-colors duration-300"
              >
                Sign In
              </NavLink>
            </>
          )}
        </nav>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
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
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 w-64 h-full bg-orange-700 p-6 transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50 shadow-lg`}
      >
        <button
          className="text-white focus:outline-none mb-4"
          onClick={toggleMenu}
        >
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <NavLink
          to="/blog"
          className="text-white hover:text-teal-300 transition-colors duration-300 block"
          onClick={toggleMenu}
        >
          Blog
        </NavLink>
        <NavLink
          to="/search"
          className="text-white hover:text-teal-300 transition-colors duration-300 block"
          onClick={toggleMenu}
        >
          Explore
        </NavLink>
        {isLoggedIn ? (
          <>
            <NavLink
              to="/blog/create"
              className="text-white hover:text-teal-300 transition-colors duration-300 block"
              onClick={toggleMenu}
            >
              Create Blog
            </NavLink>
            <button
              className="text-white hover:text-teal-300 transition-colors duration-300 block w-full text-left"
              onClick={() => {
                handleLogout();
                toggleMenu();
              }}
            >
              Logout
            </button>
            <span className="text-teal-300 font-semibold block">{userName}</span>
          </>
        ) : (
          <>
            <NavLink
              to="/"
              className="text-white hover:text-teal-300 transition-colors duration-300 block"
              onClick={toggleMenu}
            >
              Sign In
            </NavLink>
          </>
        )}
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMenu}></div>
      )}
    </header>
  );
};

export default Header;
