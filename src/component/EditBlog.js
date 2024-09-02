import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogForm from '../component/BlogForm';
import { useParams } from 'react-router-dom';

const EditBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const response = await axios.get(`/api/blogs/${id}`);
      setBlog(response.data);
    };
    fetchBlog();
  }, [id]);

  const handleSubmit = async (formData) => {
    const token = localStorage.getItem('token');

    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    };

    await axios.put(`https://travelfly.onrender.com/api/blogs/${id}`, formData, config);
    alert('Blog updated successfully!');
  };

  return (
    <div>
      <h2>Edit Blog</h2>
      {blog && (
        <BlogForm
          blogData={blog}
          onSubmit={handleSubmit}
          buttonText="Update Blog"
        />
      )}
    </div>
  );
};

export default EditBlog;
