import React, { useRef } from 'react';
import DestinationCard from './DestinationCard';
import Gallery from './Gallery';

const LandMarkinfo = ({ LandmarkData }) => {
  // Destructure relevant data from props
  const {
    name,
    description,
    location,
    type,
    unique_features,
    interesting_anecdotes,
    visiting_tips,
    accessibility,
    nearby_attractions,
    recommendations
  } = LandmarkData;

  // Create refs for each section
  const descriptionRef = useRef(null);
  const locationRef = useRef(null);
  const typeRef = useRef(null);
  const uniqueFeaturesRef = useRef(null);
  const anecdotesRef = useRef(null);
  const visitingTipsRef = useRef(null);
  const accessibilityRef = useRef(null);
  const attractionsRef = useRef(null);
  const recommendationsRef = useRef(null);

  // Scroll to a specific section when the index is clicked
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="city-info bg-gray-100 rounded-lg shadow-md p-6">
      {/* Sticky Index */}
      <div className="sticky top-0 bg-white py-4 mb-6 z-10">
        <div className="flex justify-center overflow-x-auto">
          <ul className="flex space-x-4">
            <li className="cursor-pointer" onClick={() => scrollToSection(descriptionRef)}>Description</li>
            <li className="cursor-pointer" onClick={() => scrollToSection(locationRef)}>Location</li>
            <li className="cursor-pointer" onClick={() => scrollToSection(typeRef)}>Type</li>
            <li className="cursor-pointer" onClick={() => scrollToSection(uniqueFeaturesRef)}>Unique Features</li>
            <li className="cursor-pointer" onClick={() => scrollToSection(anecdotesRef)}>Interesting Anecdotes</li>
            <li className="cursor-pointer" onClick={() => scrollToSection(visitingTipsRef)}>Visiting Tips</li>
            <li className="cursor-pointer" onClick={() => scrollToSection(accessibilityRef)}>Accessibility</li>
            <li className="cursor-pointer" onClick={() => scrollToSection(attractionsRef)}>Nearby Attractions</li>
            <li className="cursor-pointer" onClick={() => scrollToSection(recommendationsRef)}>Recommendations</li>
          </ul>
        </div>
      </div>

      {/* City Info Sections */}
      <div ref={descriptionRef}>
        <h3 className="text-xl font-semibold mb-2">Description</h3>
        <p>{description}</p>
      </div>

      <div ref={locationRef}>
        <h3 className="text-xl font-semibold mb-2">Location</h3>
        <p>{location.city}, {location.state}, {location.country}</p>
        <p>Coordinates: {location.coordinates.latitude}, {location.coordinates.longitude}</p>
      </div>

      <div ref={typeRef}>
        <h3 className="text-xl font-semibold mb-2">Type</h3>
        <p>{type}</p>
      </div>

      <div ref={uniqueFeaturesRef}>
        <h3 className="text-xl font-semibold mb-2">Unique Features</h3>
        <p>{unique_features}</p>
      </div>

      <div ref={anecdotesRef}>
        <h3 className="text-xl font-semibold mb-2">Interesting Anecdotes</h3>
        <p>{interesting_anecdotes}</p>
      </div>

      <div ref={visitingTipsRef}>
        <h3 className="text-xl font-semibold mb-2">Visiting Tips</h3>
        <p>{visiting_tips}</p>
      </div>

      <div ref={accessibilityRef}>
        <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
        <p>{accessibility}</p>
      </div>

      <div ref={attractionsRef}>
        <h3 className="text-xl font-semibold mb-2">Nearby Attractions</h3>
        <ul>
          {nearby_attractions.map((attraction, index) => (
            <li key={index}>{attraction}</li>
          ))}
        </ul>
      </div>

      <div ref={recommendationsRef}>
        <h3 className="text-xl font-semibold mb-2">Recommendations</h3>
        <ul>
          {recommendations.map((recommendation, index) => (
            <li key={index}>{recommendation}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LandMarkinfo;
