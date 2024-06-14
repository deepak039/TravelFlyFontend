import React, { useRef, useState, useEffect } from 'react';
// import { useParams } from "react-router-dom";
import SearchResult from './SearchResult';
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import Designer from "../utils/Designer.png"


const Search = () => {
  // const { value } = useParams();
  const [searchText, setSearchText] = useState(false);
  const searchv = useRef();
  const [dataLoc, setdata] = useState(null);
  

  const bgImages = [
    'url("https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    'url("https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    'url("https://plus.unsplash.com/premium_photo-1679513259573-10a3298d3339?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
  ];
  const [bgImageIndex, setBgImageIndex] = useState(0);
  useEffect(() => {
    // Focus on the input field when component mounts
    searchv.current.focus();
  }, []);

  const handleSubmit = (e) => {
    setSearchText(true);
    setdata(null);
    e.preventDefault();

    fetch('http://localhost:3111/api/v1/tours/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        search: searchv.current.value
      })
    })
    .then(response => response.json())
    .then(data => {
      setSearchText(false);
      setdata(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  useEffect(() => {
    // Change background image and placeholder every 5 seconds
    const interval = setInterval(() => {
      setBgImageIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="relative bg-center bg-cover min-h-screen px-4 text-current bg-gradient-to-br from-teal-600 via-yellow-500 to-orange-500" style={{
      backgroundImage: bgImages[bgImageIndex],
      animation: "slide-right 3s infinite", // Corrected animation direction
    }}>
      {/* Hero Image/Video (replace with your actual image/video) */}
      

      <div className="flex justify-center items-center h-full mb-2">
      <div className='bg-white p-4 flex flex-col justify-center items-center mt-3 bg-opacity-50 rounded-lg'>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover Your Next Adventure
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Find your perfect destination with our location details feature.
          </p>
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
      </div>

      <div className='pb-4'>
        {searchText && (
          <>
            <ShimmerSimpleGallery card imageHeight={300} caption />
          </>
        )}
        {dataLoc && (dataLoc.status === "sucess") && <SearchResult destinations={dataLoc.data.text} />}
        {dataLoc && (dataLoc.status === "fail") && <div className='h-screen bg-slate-300 w-[100%] text-center'>
          Opps SomeThing Went wrong !!!!!!!
        </div>}
      </div>
    </div>
  );
}

export default Search;