import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const [bgImageIndex, setBgImageIndex] = useState(0);
  const searchValue = useRef();
  const navigate = useNavigate();

  const bgImages = [
    'url("https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    'url("https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    'url("https://plus.unsplash.com/premium_photo-1679513259573-10a3298d3339?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
  ];

  const placeholders = [
    "Enter your dream destination",
    "Explore new horizons",
    "Where will you go next?",
  ];

  const handleClick = () => {
    const value = searchValue.current.value;
    console.log(value);
    navigate("/search/" + value);
  };

  const handleFocus = () => {
    navigate("/search");
  };

  useEffect(() => {
    // Change background image and placeholder every 5 seconds
    const interval = setInterval(() => {
      setBgImageIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div
        className="relative h-screen bg-cover bg-center pt-20 px-4 text-current"
        style={{
          backgroundImage: bgImages[bgImageIndex],
          animation: "slide-right 3s infinite", // Corrected animation direction
        }}
      >
        <div className="mx-auto py-[8%] relative flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover Your Next Adventure
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Find your perfect destination with our location details feature.
          </p>
          <form className="flex space-x-4" onSubmit={(e) => e.preventDefault()}>
            <input
              ref={searchValue}
              type="text"
              placeholder={placeholders[bgImageIndex]}  // Dynamic placeholder
              className="bg-white rounded-full py-2 px-4 w-64 border-2 focus:outline-none focus:ring-2 hover:border-teal-600 text-black"
              onFocus={handleFocus}
            />
            <button
              className="hidden bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-600"
              onClick={handleClick}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Hero;
