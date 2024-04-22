import React, { useRef ,useEffect} from 'react';
import DestinationCard from './DestinationCard';
import Gallery from './Gallery';
import Shimmer from './Shimmer';

const CityInfo = ({ cityData }) => {
  // Destructure relevant data from props

  // const {
  //   description,
  //   location: { name,city, state, country, region },
  //   transportation: { air, train, road },
  //   best_time_to_visit: { months, festivals },
  //   sights,
  //   cultural_experiences,
  //   shopping,
  //   safety_tips,
  //   travel_tips,
  // } = cityData;

  // Create refs for each section
  const locationRef = useRef(null);
  const transportationRef = useRef(null);
  const bestTimeRef = useRef(null);
  const sightsRef = useRef(null);
  const culturalRef = useRef(null);
  const shoppingRef = useRef(null);
  const safetyRef = useRef(null);
  const travelRef = useRef(null);

  // Scroll to a specific section when the index is clicked
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };









  return (
    <div className="city-info bg-gray-100 rounded-lg shadow-md p-6">
      {/* Index */}
      {/* Sticky Index */}
      

      {/* City Info Sections */}
      
     <div className='w-[100%] flex flex-row'>
     <div className='w-[40%]'>
     <div ref={locationRef} className="mb-8">
        {/* Location */}
        <h3 className="text-xl font-semibold mb-2">Location</h3>
        <p>{cityData?.location?.city}, {cityData?.location?.state}, {cityData?.location?.country}</p>
        <p>Region: {cityData?.location?.region}</p>
      </div>
      <h2 ref={locationRef} className="text-3xl font-semibold mb-4">{cityData?.location?.name}</h2>
      <p className="text-lg mb-6">{cityData?.description}</p>
     </div>

     <div className='w-[60%] '>
     <Gallery locationName={cityData?.location?.name} />
     </div>
     </div>

     <div className="sticky top-0 bg-white py-4 mb-6 z-10">
        <div className="flex justify-center overflow-x-auto">
          <ul className="flex space-x-4">
            <li className="cursor-pointer" onClick={() => scrollToSection(locationRef)}>Location</li>
            <li className="cursor-pointer" onClick={() => scrollToSection(transportationRef)}>Transportation</li>
            <li className="cursor-pointer" onClick={() => scrollToSection(bestTimeRef)}>Best Time to Visit</li>
            <li className="cursor-pointer" onClick={() => scrollToSection(sightsRef)}>Sights</li>
            <li className="cursor-pointer" onClick={() => scrollToSection(culturalRef)}>Cultural Experiences</li>
            <li className="cursor-pointer" onClick={() => scrollToSection(shoppingRef)}>Shopping</li>
            <li className="cursor-pointer" onClick={() => scrollToSection(safetyRef)}>Safety Tips</li>
            <li className="cursor-pointer" onClick={() => scrollToSection(travelRef)}>Travel Tips</li>
          </ul>
        </div>
      </div>

      

      <div ref={transportationRef} className="mb-8">
        {/* Transportation */}
        <h3 className="text-xl font-semibold mb-2">Transportation</h3>
        <p>Airport: {cityData?.transportation?.air?.airport}</p>
        <p>Train: {cityData?.transportation?.train}</p>
        <p>Road: {cityData?.transportation?.road}</p>
      </div>

     {(!cityData?.best_time_to_visit )? <Shimmer/>:
       <div ref={bestTimeRef} className="mb-8">
       {/* Best Time to Visit */}
       <h3 className="text-xl font-semibold mb-2">Best Time to Visit</h3>
       <p>Pleasant weather months: {cityData?.best_time_to_visit?.months}</p>
       <p>Festivals: {cityData?.best_time_to_visit?.festivals}</p>
     </div>
     }



{(!cityData?.sights )? <Shimmer/>:
     <div ref={sightsRef} className="mb-4">
     {/* Sights */}
     <h3 className="text-xl font-semibold mb-2">Places to visit</h3>
     
     <div className='overflow-x-scroll'>
    
      <div className=" flex flex-wrap justify-left ">
      {cityData?.sights?.map((sight, index) => (
        <DestinationCard key={index} destination={sight} />
      ))}
    </div>
    
     

     </div>
   </div>
    }

      

      {(!cityData?.shopping)?<Shimmer/>:<div ref={culturalRef} className="mb-8">
        {/* Cultural Experiences */}
        <h3 className="text-xl font-semibold mb-2">Cultural Experiences</h3>
        
          <ul>
          {cityData?.cultural_experiences?.map((experience, index) => (
            <li key={index}>{experience}</li>
          ))}
        </ul>
        
      </div>}

      {(!cityData?.safety_tips)?<Shimmer/>:<div ref={shoppingRef} className="mb-8">
        {/* Shopping */}
        <h3 className="text-xl font-semibold mb-2">Shopping</h3>
       
         <ul>
         {cityData?.shopping?.map((item, index) => (
           <li key={index}>{item}</li>
         ))}
       </ul>
       
      </div>}

      <div ref={safetyRef} className="mb-8">
        {/* Safety Tips */}
        <h3 className="text-xl font-semibold mb-2">Safety Tips</h3>
        <ul>
          {cityData?.safety_tips?.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>

      {(!cityData?.travel_tips)?<Shimmer/>:<div ref={travelRef}>
        {/* Travel Tips */}
        <h3 className="text-xl font-semibold mb-2">Travel Tips</h3>
        <ul>
          {cityData?.travel_tips?.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>}
    </div>
  );
};

export default CityInfo;
