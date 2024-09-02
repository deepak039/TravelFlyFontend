import React, { useState } from 'react';

const BlogForm = ({ blogData = {}, onSubmit, buttonText = "Submit" }) => {
  const [title, setTitle] = useState(blogData.title || "");
  const [content, setContent] = useState(blogData.content || "");
  const [tags, setTags] = useState(blogData.tags ? blogData.tags.join(', ') : "");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [previewOpen, setPreviewOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('tags', tags);
    if (image) formData.append('image', image);

    try {
      await onSubmit(formData);
    } catch (err) {
      setError('Failed to submit the blog');
    }
  };

  const handlePreview = (e) => {
    e.preventDefault();
    setPreviewOpen(true);
  };

  const closeModal = () => {
    setPreviewOpen(false);
  };

  return (
    <>
      <form className="space-y-6">
        <div>
          <label className="block text-gray-700">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-gray-700">Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-gray-700">Tags (comma separated):</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-gray-700">Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <div className="flex justify-between">
          <button 
            onClick={handlePreview} 
            className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-400"
          >
            Preview
          </button>
          <button 
            onClick={handleSubmit} 
            className="bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-500"
          >
            {buttonText}
          </button>
        </div>
      </form>

      {previewOpen && (
        <PreviewModal 
          title={title} 
          content={content} 
          tags={tags} 
          image={image} 
          closeModal={closeModal} 
        />
      )}
    </>
  );
};

const PreviewModal = ({ title, content, tags, image, closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4">Blog Preview</h2>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="mb-4">{content}</p>
        {tags && <p className="text-gray-600 mb-4">Tags: {tags}</p>}
        {image && <img src={URL.createObjectURL(image)} alt="Blog Preview" className="mb-4"/>}
        <button 
          onClick={closeModal} 
          className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-500"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default BlogForm;
