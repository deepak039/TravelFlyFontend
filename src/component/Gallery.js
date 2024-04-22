import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { storeImages } from '../utils/gallarySlice'; // Assuming gallaryslice.js is in the same directory

const Gallery = ({ locationName }) => {
  const images = useSelector((state) => state.gallery.imagesByLocation[locationName]) ;
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
       // Only fetch if images not already present
        const apiKey = 'gAByeUKUSLetiJ3TSOCXTbOS3MAwYjhkl3nDKwRJt4k'; // Replace with your actual API key
        const url = `https://api.unsplash.com/photos/random?query=${locationName}&count=10&client_id=${apiKey}`;
        try {
          const response = await fetch(url);
          const data = await response.json();
          console.log(data);
          dispatch(storeImages({ locationName, images: data })); // Store images in Redux
        } catch (error) {
          console.error('Error fetching images:', error);
          // Handle error gracefully
        }
      }
    
    !images&&fetchImages();
  }, [locationName, images, dispatch]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery overflow-x-auto">
      {images? (
        <div className="gallery-container flex flex-nowrap gap-4">
          {images.map((image) => (
            <img
              key={image.id}
              className={`h-80 w-auto rounded-lg shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105 ${
                selectedImage === image ? 'fixed top-0 left-0 w-screen h-screen z-10' : ''
              }`}
              src={image.urls.small}
              alt={image.alt_description}
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Loading images...</p>
      )}

      {selectedImage && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-75 z-10 flex justify-center items-center">
          <img
            className="max-w-full max-h-full z-20"
            src={selectedImage.urls.regular}
            alt={selectedImage.alt_description}
          />
          <button
            className="absolute top-10 right-10 text-white text-3xl"
            onClick={handleCloseImage}
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;