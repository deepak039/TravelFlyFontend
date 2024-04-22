import React from 'react';

const FeatureSection = () => {
  const categories = [
    {
      name: 'Nature',
      intro: 'Explore the wonders of nature with our selection of breathtaking destinations.',
      imageUrl: 'https://images.unsplash.com/photo-1506744038138-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', // Scenic mountain lake
      destinations: [
        { 
          name: 'Banff National Park', 
          imageUrl: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', // Moraine Lake in Banff
          description: 'Discover the stunning landscapes and crystal-clear lakes of Banff National Park.' 
        },
        {
          name: 'Grand Canyon',
          imageUrl: 'https://images.unsplash.com/photo-1527441646276-f2c332e92191?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', // Grand Canyon vista
          description: 'Experience the awe-inspiring vistas and geological wonders of the Grand Canyon.'
        },
        {
          name: 'Great Barrier Reef',
          imageUrl: 'https://images.unsplash.com/photo-1582186073929-1df432617946?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', // Great Barrier Reef coral and fish
          description: 'Dive into the vibrant underwater world of the Great Barrier Reef and discover its colorful marine life.'
        },
        {
          name: 'Amazon Rainforest',
          imageUrl: 'https://images.unsplash.com/photo-1444108055519-6d5e977849fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80', // Aerial view of Amazon River
          description: 'Explore the lush biodiversity of the Amazon Rainforest, the lungs of our planet.'
        },
        {
          name: 'Patagonia',
          imageUrl: 'https://images.unsplash.com/photo-1533521186421-9799c1093e49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', // Patagonia mountains and lake
          description: 'Witness the raw beauty of Patagonia with its glaciers, mountains, and unique wildlife.'
        },
      ],
    },
    {
      name: 'Spiritual',
      intro: 'Embark on a journey of spiritual discovery with our selection of sacred destinations.',
      imageUrl: 'https://images.unsplash.com/photo-1559617044-3d6d1077884f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', // Buddhist temple
      destinations: [
        { 
          name: 'Varanasi, India', 
          imageUrl: 'https://images.unsplash.com/photo-1518907164466-0b9995d02311?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80', // Varanasi ghats
          description: 'Experience the spiritual essence of Varanasi, one of the oldest cities in the world, with its ancient temples and sacred ghats.' 
        },
        {
          name: 'Jerusalem', 
          imageUrl: 'https://images.unsplash.com/photo-1501761104967-943111804633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', // Dome of the Rock
          description: 'Explore the holy sites of Jerusalem, including the Western Wall and the Dome of the Rock, on a spiritual pilgrimage.'
        },
        {
          name: 'Machu Picchu', 
          imageUrl: 'https://images.unsplash.com/photo-1544921239-68e420795137?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80', // Machu Picchu ruins
          description: 'Journey to the mystical ruins of Machu Picchu and uncover the secrets of the ancient Inca civilization.'
        },
        {
          name: 'Mount Kailash, Tibet', 
          imageUrl: 'https://images.unsplash.com/photo-1624636122635-4902d3a8119a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80', // Mount Kailash
          description: 'Embark on a sacred pilgrimage to Mount Kailash, a holy mountain revered by Hindus, Buddhists, Jains, and Bönpos.' 
        },
        {
          name: 'Angkor Wat, Cambodia', 
          imageUrl: 'https://images.unsplash.com/photo-1528062354631-466063442021?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', // Angkor Wat temple complex 
          description: 'Discover the awe-inspiring architecture and spiritual significance of Angkor Wat, a vast temple complex dedicated to the Hindu god Vishnu.' 
        },
      ],
    },
    {
      name: 'Adventure',
      intro: 'Get your adrenaline pumping with our selection of thrilling adventure destinations.',
      imageUrl: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', // Rock climber
      destinations: [
        { 
          name: 'Queenstown, New Zealand', 
          imageUrl: 'https://images.unsplash.com/photo-1506973228179-de0d36645f6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80', // Queenstown landscape
          description: 'Experience the ultimate adrenaline rush with bungee jumping, skydiving, and jet boating in Queenstown.' 
        },
        {
          name: 'Yosemite National Park', 
          imageUrl: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80', // Yosemite valley
          description: 'Embark on an epic outdoor adventure in Yosemite National Park, with its towering granite cliffs and cascading waterfalls.'
        },
        {
          name: 'Swiss Alps', 
          imageUrl: 'https://images.unsplash.com/photo-1517824806704-9040b037703b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', // Swiss Alps mountains
          description: 'Explore the stunning landscapes of the Swiss Alps and enjoy world-class skiing, hiking, and mountaineering.' 
        },
        {
          name: 'Interlaken, Switzerland', 
          imageUrl: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80', // Paragliding in Interlaken
          description: 'Get your heart racing with paragliding, skydiving, and canyoning amidst the breathtaking scenery of Interlaken.'
        },
        {
          name: 'Costa Rica',
          imageUrl: 'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', // Ziplining in Costa Rican rainforest
          description: 'Experience the thrill of ziplining, white water rafting, and surfing in the lush rainforests and pristine beaches of Costa Rica.'
        },
      ],
    },
  ];
  return (
    
      <div className=" bg-orange-50  mt-2">
        <h2 className="text-3xl font-semibold mb-8 text-center text-black">Featured Destinations</h2>
        <div className="w-[100%]">
          {categories.map((category, index) => (
            <div key={index} className=" bg-amber-200 my-4 mx-2 rounded-xl ">
              <div className=" rounded-lg overflow-hidden  shadow-md flex flex-wrap">
                <img src={category.imageUrl} alt={category.name} className="md:w-1/3 w-full object-cover" />
                <div className="p-4 w-full md:w-2/3 flex-row">
                  <h3 className="text-xl font-semibold mb-2 text-tale-orange">{category.name}</h3>
                  <p className="text-gray-700 mb-4">{category.intro}</p>
                  <div className='flex flex-warp overflow-x-scroll no-scrollbar   '>
                  <div className='flex '>
                  {category.destinations.map((destination, idx) => (
                    <div key={idx} className="mb-2 mr-3 relative w-48  ">
                    <img alt='desimg' src={destination.imageUrl} className="w-full h-48 object-cover rounded-lg bg-orange-300" />
                    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300 flex items-center justify-center text-white text-center rounded-lg">
                      <div>
                        <h4 className="text-lg font-semibold">{destination.name}</h4>
                        <p className="text-gray-100">{destination.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  ))}

                  </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    
  );
};

export default FeatureSection;
