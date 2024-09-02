import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const response = await axios.get(`https://travelfly.onrender.com/api/v1/blog/${id}`);
      setBlog(response.data);
    };
    fetchBlog();
  }, [id]);

  return (
    <div className="container mx-auto p-6">
      {blog ? (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <h2 className="text-4xl font-bold mb-6 text-center text-gray-900">{blog.title}</h2>
          {blog.image && (
            <div className="w-full h-96 overflow-hidden mb-6">
              <img
                src={`https://travelfly.onrender.com/${blog.image}`}
                alt={blog.title}
                className="object-cover w-full h-full transform transition duration-300 hover:scale-105"
              />
            </div>
          )}
          <div className="p-6">
            <p className="text-gray-800 text-lg leading-relaxed mb-6">{blog.content}</p>
            <div className="flex justify-between items-center">
              <div className="text-gray-600 text-sm">
                <p>By: <span className="font-semibold">{blog.author?.name}</span></p>
                <p>Tags: {blog.tags && blog.tags.join(', ')}</p>
              </div>
              <div className="text-gray-500 text-sm">
                <p className="italic">Published on: {new Date(blog.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-700">Loading blog...</p>
      )}
    </div>
  );
};

export default BlogDetail;
