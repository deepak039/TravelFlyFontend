import React from 'react';
import axios from 'axios';
import BlogForm from '../component/BlogForm';

const CreateBlog = () => {
  const handleSubmit = async (formData) => {
    const token = localStorage.getItem('jwtToken');

    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    };

    const response = await axios.post('https://travelfly.onrender.com/api/v1/blog', formData, config);
    console.log(response);
    alert('Blog created successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-100 to-teal-200 flex items-center justify-center">
      <div className="max-w-3xl w-full p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-teal-700 mb-4 text-center">Share Your Journey</h2>
        <p className="text-lg text-gray-700 mb-6 text-center">Inspire fellow travelers with your stories!</p>
        <BlogForm onSubmit={handleSubmit} buttonText="Share Now" />
      </div>
    </div>
  );
};

export default CreateBlog;
