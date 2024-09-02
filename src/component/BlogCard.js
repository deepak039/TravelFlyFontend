import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  const { _id, title, content, image, author, tags } = blog;

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8 transform transition duration-300 hover:scale-105">
      {image && (
        <div className="w-full h-56 overflow-hidden">
          <img
            src={`https://travelfly.onrender.com/${image}`}
            alt={title}
            className="object-cover w-full h-full transform transition duration-200 hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">
          {content.substring(0, 120)}...
        </p>
        <div className="text-sm text-gray-500 mb-4">
          <span>By: {author?.name}</span>
          <br />
          <span>Tags: {tags && tags.join(', ')}</span>
        </div>
        <Link
          to={`/blogs/${_id}`}
          className="inline-block px-4 py-2 mt-4 text-teal-600 hover:text-white bg-transparent hover:bg-teal-600 border border-teal-600 rounded transition duration-300 ease-in-out"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
