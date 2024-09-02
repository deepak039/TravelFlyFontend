import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from '../component/BlogCard';

import { ShimmerSimpleGallery } from "react-shimmer-effects";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('https://travelfly.onrender.com/api/v1/blog');
        setBlogs(response.data);
      } catch (err) {
        setError('Failed to fetch blogs. Please try again later.');
      } finally {
        setLoading(false); // Stop loading after the request is complete
      }
    };
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div>
        
       
        <div className="w-full">
          <ShimmerSimpleGallery card imageHeight={300} caption />
        </div>
        </div>
     
    );
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className='pt-2'>
    
      <div className='flex flex-wrap justify-items-start'>
        {blogs.map(blog => (
          <div key={blog._id} className='md:w-1/3 px-2'>
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
