import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchResult from './SearchResult';
import { ShimmerSimpleGallery } from 'react-shimmer-effects';
import Designer from '../utils/Designer.png';

const Search = () => {
  const [searchText, setSearchText] = useState(false);
  const searchv = useRef();
  const [dataLoc, setdata] = useState(null);
  const navigate = useNavigate();
  const [placeholder, setPlaceholder] = useState("Find your dream vacation");

  // List of dynamic suggestions
  const suggestions = [
    "Discover hidden gems in Paris",
    "Explore famous beaches in Bali",
    "Find top-rated restaurants in New York",
    "Visit historic landmarks in Rome",
    "Plan a scenic getaway to Kyoto"
  ];

  useEffect(() => {
    searchv.current.focus();

    // Function to cycle through the suggestions
    let suggestionIndex = 0;
    const suggestionInterval = setInterval(() => {
      setPlaceholder(suggestions[suggestionIndex]);
      suggestionIndex = (suggestionIndex + 1) % suggestions.length;
    }, 3000); // Change every 3 seconds

    return () => {
      clearInterval(suggestionInterval);
    };
  }, [suggestions]);

  const handleInputChange = (e) => {
    // Stop cycling placeholder when the user starts typing
    if (e.target.value.length > 0) {
      setPlaceholder('');
    } else {
      setPlaceholder(suggestions[0]); // Revert to the first suggestion if input is cleared
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchText(true);
    setdata(null);

    const token = localStorage.getItem('jwtToken');
    if (!token) {
      alert('Please log in to continue.');
      navigate('/');
      return;
    }

    fetch('https://travelfly.onrender.com/api/v1/tours/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        search: searchv.current.value,
      }),
    })
      .then((response) => {
        if (response.status === 401) {
          alert('Please log in to continue.');
          navigate('/');
          return null;
        }
        return response.json();
      })
      .then((data) => {
        setSearchText(false);
        if (data) setdata(data);
      })
      .catch((error) => {
        console.error('Error:', error);
        setSearchText(false);
        setdata({ status: 'fail' });
      });
  };

  return (
    <div
      className="relative bg-center min-h-screen px-4 text-current bg-gradient-to-br from-teal-600 via-yellow-500 to-orange-500"
      style={{
        backgroundImage: `url(${Designer})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay to improve contrast */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="flex justify-center items-center h-full backdrop-filter backdrop-blur-sm relative">
        <form
          className={`w-full md:w-1/2 flex flex-col items-center py-5 space-y-4 z-10 ${
            searchText ? 'pt-0' : 'pt-20'
          }`}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            ref={searchv}
            onChange={handleInputChange}
            className="w-full max-w-lg m-2 py-3 px-4 placeholder-gray-700 text-gray-900 rounded-2xl border-2 border-teal-600 focus:outline-none focus:border-teal-700 bg-white bg-opacity-75 shadow-lg"
            placeholder={placeholder}
            aria-label="Search for vacation destinations"
          />
          <button
            type="submit"
            className="w-full max-w-lg py-3 bg-teal-600 text-white rounded-2xl hover:bg-teal-700 hover:shadow-md transition-all duration-300 focus:outline-none focus:bg-teal-700"
            aria-label="Submit search"
          >
            Search
          </button>
        </form>
      </div>

      <div className="pb-4 relative z-10">
        {searchText && (
          <div className="mt-10 flex justify-center">
            <ShimmerSimpleGallery card imageHeight={300} caption />
          </div>
        )}
        {dataLoc && dataLoc.status === 'sucess' && (
          <SearchResult destinations={dataLoc.data.text} />
        )}
        {dataLoc && dataLoc.status === 'fail' && (
          <div className="h-full flex justify-center items-center text-center bg-slate-300 w-full py-10">
            <p className="text-gray-700 text-lg font-semibold">
              Oops, something went wrong! Please try again.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
