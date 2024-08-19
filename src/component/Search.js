import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchResult from './SearchResult';
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import Designer from "../utils/Designer.png";

const Search = () => {
  const [searchText, setSearchText] = useState(false);
  const searchv = useRef();
  const [dataLoc, setdata] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Focus on the input field when component mounts
    searchv.current.focus();
  }, []);

  const handleSubmit = (e) => {
    setSearchText(true);
    setdata(null);
    e.preventDefault();
    const token = localStorage.getItem('jwtToken'); 
     if (!token) {
      alert('Please log in to continue.');
      navigate('/');
      return;
    }

    fetch('http://localhost:3111/api/v1/tours/search', {
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
        alert('Please log in to continue.');
        navigate('/');
        return null;
      }
      return response.json();
    })
    .then(data => {
      if (data) {
        setSearchText(false);
        setdata(data);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <div className="relative bg-center min-h-screen px-4 text-current bg-gradient-to-br from-teal-600 via-yellow-500 to-orange-500" style={{ backgroundImage: `url(${Designer})` }}>
      <div className="flex justify-center items-center h-full">
        <form className={`w-full md:w-1/2 grid grid-cols-12 py-5 ${searchText ? 'pt-0' : 'pt-20'}`} onSubmit={handleSubmit}>
          <input
            type='text'
            ref={searchv}
            className='m-2 py-2 px-4 col-span-9 placeholder-black text-blue-600 rounded-2xl border-2 border-teal-600 focus:outline-none focus:border-teal-700 bg-transparent'
            placeholder='Find your dream vacation'
          />
          <button className='col-span-3 m-2 py-2 border-2 border-teal-700 text-white rounded-xl bg-teal-600 hover:bg-white hover:text-teal-800 focus:outline-none focus:bg-teal-700'>
            Search
          </button>
        </form>
      </div>

      <div className='pb-4'>
        {searchText && (
          <>
            <ShimmerSimpleGallery card imageHeight={300} caption />
          </>
        )}
        {dataLoc && (dataLoc.status === "sucess") && <SearchResult destinations={dataLoc.data.text} />}
        {dataLoc && (dataLoc.status === "fail") && <div className='h-screen bg-slate-300 w-[100%] text-center'>
          Oops, something went wrong!
        </div>}
      </div>
    </div>
  );
}

export default Search;
