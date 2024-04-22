import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { storeImages } from '../utils/gallarySlice';
import { Link } from 'react-router-dom';

const DestinationCard = ({ destination }) => {
  // if(!destination.location){
  //   return;
  // }
    

  const images = useSelector((state) => state.gallery.imagesByLocation[destination?.location]) ;
  const dispatch = useDispatch();
  const [imageUrl, setImageUrl] = useState('');
  // const [selectedImage, setSelectedImage] = useState(null);
  const loc = destination?.location;

  useEffect(() => {
    const fetchImages = async () => {
       // Only fetch if images not already present
       
        const apiKey = 'gAByeUKUSLetiJ3TSOCXTbOS3MAwYjhkl3nDKwRJt4k'; // Replace with your actual API key
        const url = `https://api.unsplash.com/photos/random?query=${destination?.location}&count=10&client_id=${apiKey}`;
        try {
          const response = await fetch(url);
          const data = await response.json();
          setImageUrl(data[0]?.urls?.regular)
          console.log(data);
          dispatch(storeImages({ loc, images: data })); // Store images in Redux
        } catch (error) {
          console.error('Error fetching images:', error);
          // Handle error gracefully
        }
      }
    
    !images&&fetchImages();
  }, [loc, images, dispatch]);













  

  // useEffect(() => {
  //   if (imageUrl) {
  //       return; // If imageUrl is present, return early to skip fetching the image
  //     }
  //   const fetchImage = async () => {
  //     const ACCESS_KEY = 'gAByeUKUSLetiJ3TSOCXTbOS3MAwYjhkl3nDKwRJt4k';
  //     const query = destination?.name +' '+destination?.location;
  //     const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${ACCESS_KEY}`;

  //     try {
  //       const response = await fetch(url);
  //       const data = await response.json();
  //       console.log(data);
  //       if (data.results && data.results.length > 0) {
  //         setImageUrl(data.results[0].urls.regular);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching image:', error);
  //     }
  //   };

  //   fetchImage();
  // }, []);

  return (
   <>
    <Link to={`/destination/${destination?.name}/${destination?.type}`}>
      <div className="max-w-xs mx-2 mb-2 rounded-lg overflow-hidden shadow-lg bg-gray-100">
        <img
          className="w-full h-64 object-cover"
          src={imageUrl}
          alt={destination?.name}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-gray-800">
            {destination.name}
          </div>
          <p className="text-gray-700 text-base">
            {destination?.description}
          </p>
          <p className="text-gray-700 text-base mt-4">
            <strong>Location:</strong> {destination?.location}
            <strong>Type:</strong>{destination?.type}
          </p>
        </div>
      </div>
    </Link>
   </>
  );
};

export default DestinationCard;
