import React from 'react';

function WhyThis() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">About This Website</h2>
        <p className="text-lg md:text-xl mb-8">
          Our website is dedicated to helping you find your next adventure with ease. 
          We understand that planning a trip can be overwhelming, which is why we strive to provide you with accurate 
          location details and recommendations tailored to your preferences.
        </p>
        <p className="text-lg md:text-xl mb-8">
          With the integration of the GPT API, we ensure that you receive personalized and insightful suggestions 
          for your travel destinations. Whether you're seeking a relaxing beach getaway, an adventurous mountain trek, 
          or a spiritual retreat, our platform leverages the power of AI to enhance your travel experience.
        </p>
        <p className="text-lg md:text-xl mb-8">
          Let us guide you on your journey and unlock the possibilities of your next destination.
        </p>
      </div>
    </section>
  );
}

export default WhyThis;
