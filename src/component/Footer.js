import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/3 text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="mt-2">
            <li><a href="#" className="block hover:text-gray-400">Home</a></li>
            <li><a href="#" className="block hover:text-gray-400">Destinations</a></li>
            <li><a href="#" className="block hover:text-gray-400">About Us</a></li>
            <li><a href="#" className="block hover:text-gray-400">Contact Us</a></li>
          </ul>
        </div>
        <div className="md:w-1/3 text-center mb-4 md:mb-0">
          <h3 className="text-lg font-bold">Legal</h3>
          <ul className="mt-2">
            <li><a href="#" className="block hover:text-gray-400">Privacy Policy</a></li>
            <li><a href="#" className="block hover:text-gray-400">Terms of Service</a></li>
          </ul>
        </div>
        <div className="md:w-1/3 text-center md:text-right">
          <h3 className="text-lg font-bold">Connect With Us</h3>
          <div className="flex justify-center md:justify-end mt-2">
            <a href="#" className="text-xl mx-2 hover:text-gray-400"><i className="fab fa-facebook-square"></i></a>
            <a href="#" className="text-xl mx-2 hover:text-gray-400"><i className="fab fa-twitter-square"></i></a>
            <a href="#" className="text-xl mx-2 hover:text-gray-400"><i className="fab fa-instagram-square"></i></a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
