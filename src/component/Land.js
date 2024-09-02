import React from 'react';

const LandingPage = () => {
  return (
    <div className="font-sans text-gray-900">
      {/* Header */}
      <header className="flex items-center justify-between p-5 bg-white shadow-md">
        <div className="text-2xl font-bold">Travelify</div>
        <nav className="space-x-4">
          <a href="/" className="text-gray-700 hover:text-blue-500">Home</a>
          <a href="#search" className="text-gray-700 hover:text-blue-500">Search</a>
          <a href="#blog" className="text-gray-700 hover:text-blue-500">Blog</a>
          <a href="#about" className="text-gray-700 hover:text-blue-500">About Us</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-500">Contact</a>
        </nav>
        <div>
          <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Sign In</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen bg-cover bg-hero-pattern">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold">Discover Your Next Adventure</h1>
          <p className="mt-4 text-xl">Find destinations by location or experience with the power of AI.</p>
          <div className="mt-8">
            <input
              type="text"
              placeholder="Search by location or experience"
              className="px-4 py-2 mr-2 text-gray-700 rounded shadow-md"
            />
            <button className="px-4 py-2 text-white bg-blue-500 rounded shadow hover:bg-blue-600">Explore Now</button>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section id="search" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="mb-8 text-3xl font-bold">Featured Destinations</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Add destination cards */}
            <div className="p-6 bg-white rounded shadow-md">
              <img src="https://via.placeholder.com/300" alt="Destination 1" className="w-full mb-4 rounded" />
              <h3 className="text-xl font-semibold">Tropical Paradise</h3>
              <p className="mt-2 text-gray-700">Experience the beauty of white sandy beaches and clear waters.</p>
              <button className="mt-4 text-blue-500 hover:underline">Learn More</button>
            </div>
            {/* Repeat for more destinations */}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="mb-8 text-3xl font-bold">From Our Blog</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Add blog post previews */}
            <div className="p-6 bg-white rounded shadow-md">
              <img src="https://via.placeholder.com/300" alt="Blog 1" className="w-full mb-4 rounded" />
              <h3 className="text-xl font-semibold">10 Tips for a Perfect Getaway</h3>
              <p className="mt-2 text-gray-700">Learn how to make the most of your next vacation.</p>
              <button className="mt-4 text-blue-500 hover:underline">Read More</button>
            </div>
            {/* Repeat for more blog posts */}
          </div>
          <div className="mt-8">
            <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Write a Blog</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-white">
        <div className="container mx-auto text-center">
          <div className="mb-4 space-x-4">
            <a href="/" className="hover:underline">Privacy Policy</a>
            <a href="/" className="hover:underline">Terms of Service</a>
            <a href="/" className="hover:underline">FAQ</a>
          </div>
          <div className="mb-4">
            <a href="/" className="mx-2 hover:underline">Facebook</a>
            <a href="/" className="mx-2 hover:underline">Twitter</a>
            <a href="/" className="mx-2 hover:underline">Instagram</a>
          </div>
          <p>© 2024 Travelify. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
