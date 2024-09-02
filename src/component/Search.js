import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchResult from './SearchResult';
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Designer from "../utils/Designer.png";

const Search = () => {
  const [searchText, setSearchText] = useState(false);
  const searchv = useRef();
  const [dataLoc, setdata] = useState(null);
  const [placeholder, setPlaceholder] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const placeholders = [
    "Find your dream vacation...",
    "Search by experience: 'beach sunset', 'mountain hike'",
    "Looking for adventure? Try 'skydiving', 'surfing'",
    "Relaxing escapes: 'spa retreat', 'luxury resort'"
  ];

  useEffect(() => {
    searchv.current.focus();

    let index = 0;
    const changePlaceholder = () => {
      setPlaceholder(placeholders[index]);
      index = (index + 1) % placeholders.length;
    };

    changePlaceholder();
    const intervalId = setInterval(changePlaceholder, 2000);

    return () => clearInterval(intervalId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    setSearchText(true);
    setIsLoading(true);
    setdata(null);
    e.preventDefault();
    const token = localStorage.getItem('jwtToken');

    fetch('https://travelfly.onrender.com/api/v1/tours/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        search: searchv.current.value
      })
    })
    .then(response => {
      if (response.status === 401) {
        toast.error('Please log in to continue.');
        setTimeout(() => {
          navigate('/');
        }, 2000);
        
        return null;
      }
      return response.json();
    })
    .then(data => {
      if (data) {
        setSearchText(false);
        setIsLoading(false);
        if (data.status === "sucess") {
          toast.success('Search completed successfully!');
          setdata(data);
        } else {
          toast.error('No results found. Please try again.');
        }
      }
    })
    .catch(error => {
      console.error('Error:', error);
      toast.error('An error occurred while searching. Please try again.');
      setIsLoading(false);
    });
  };

  return (
    <div className="relative bg-center min-h-screen flex flex-col items-center px-4 bg-gradient-to-br from-teal-600 via-yellow-500 to-orange-500" style={{ backgroundImage: `url(${Designer})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <form className="relative z-10 w-full md:w-2/3 lg:w-1/2 flex items-center gap-4 p-2 mt-8 bg-white/80 rounded-xl shadow-lg backdrop-blur-md" onSubmit={handleSubmit}>
        <input
          type="text"
          ref={searchv}
          className="flex-grow py-3 px-5 placeholder-gray-500 text-gray-800 rounded-xl border border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white transition-all duration-300 ease-in-out"
          placeholder={placeholder}
        />
        <button className="py-3 px-6 border-2 border-teal-700 text-white rounded-xl bg-teal-600 hover:bg-teal-700 focus:outline-none transition-transform transform hover:scale-105">
          {isLoading ? (
            <span className="loader"></span>
          ) : (
            <span className="flex items-center justify-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-10V6a1 1 0 00-2 0v2H7a1 1 0 000 2h2v2a1 1 0 002 0v-2h2a1 1 0 000-2h-2z" clipRule="evenodd" />
              </svg>
              <span>Search</span>
            </span>
          )}
        </button>
      </form>
      <div className="relative z-10 w-full flex flex-col items-center py-8">
        {searchText && (
          <div className="w-full md:w-2/3 lg:w-1/2">
            <ShimmerSimpleGallery card imageHeight={300} caption />
          </div>
        )}
        {dataLoc && dataLoc.status === "sucess" && <SearchResult destinations={dataLoc.data.text} />}
        {dataLoc && dataLoc.status === "fail" && (
          <div className="w-full h-64 flex flex-col items-center justify-center bg-slate-300 text-center rounded-xl shadow-md mt-4">
            <p className="text-gray-700 text-xl">Oops, something went wrong!</p>
            <p className="text-gray-500 mt-2">Please try again or search with different keywords.</p>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}

export default Search;
