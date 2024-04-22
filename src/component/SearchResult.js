import React from 'react'
import DestinationCard from './DestinationCard';


const SearchResult = ({ destinations }) => {
  console.log(destinations,"this is from search reasult")
  return (
    <div className="flex flex-wrap justify-center  bg-opacity-40 bg-slate-300 py-4">
      {destinations?.destinations?.map((destination, index) => (
        <DestinationCard key={index} destination={destination} />
      ))}
    </div>
  );
};

export default SearchResult