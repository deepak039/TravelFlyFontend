/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CityInfo from './CityInfo';
import LandMarkinfo from './LandMarkinfo';
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import jsonic from 'jsonic';
import Review from './Review'
// import JSON5 from 'json5'
// import JsonParseEvenBetterErrors from 'json-parse-even-better-errors';

const Destination = () => {
  const loc_id=useParams();
  console.log(loc_id?.location);
  const [id, setid]=useState(loc_id?.location)
  const [dataLoc,setData]=useState(null);
  const [streamedData, setStreamedData] = useState('');

  const fetchDetails = async () => {
    setid(loc_id?.location);

    try {
      const response = await fetch('http://localhost:3111/api/v1/tours/details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          search: id,
          type: loc_id?.type
        })
      });

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let text = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          break;
        }
        text += decoder.decode(value);

        // Update state with streamed data
        // console.log(text)
        setStreamedData(extractDataFromStream(text));
        // console.log("streamedData")
        // console.log(streamedData);
        
      }

      // Parse the complete JSON after streaming is done
      // const cleanText = text.replace(/```json\n|\n/g, '');
      const data = jsonic(text);
      // console.log(data);
      setData(data);

    } catch (error) {
      // console.error('Error fetching data:', error);
    }
  };


  const extractDataFromStream = (streamedText) => {
    console.log(streamedText)
    try {
      const stack = [];
      
      // Iterate through each character in the streamedText
      for (const char of streamedText) {
        if (char === '{' || char === '[') {
          // Push opening braces and brackets onto the stack
          stack.push(char);
        } else if (char === '}' || char === ']') {
          // If a closing brace or bracket is encountered, pop the stack
          const lastOpen = stack.pop();
          // If the last opened brace or bracket doesn't match the current closing one, it's invalid JSON
          if ((char === '}' && lastOpen !== '{') || (char === ']' && lastOpen !== '[')) {
            throw new Error('Invalid JSON: Mismatched braces or brackets');
          }
        }
      }
  
      // Append the necessary closing characters based on what's left in the stack
      let closingChars = '';
      while (stack.length > 0) {
        const lastOpen = stack.pop();
        closingChars += lastOpen === '{' ? '}' : ']';
      }
  
      // Append the closing characters to the streamed text
      const modifiedStreamedText = streamedText + closingChars;
  
      // Parse the modified JSON string
      console.log(modifiedStreamedText);
      const partialData = jsonic(modifiedStreamedText);
      console.log(partialData);
      setData(partialData);
  
      return partialData;
    } catch (error) {
      console.error('Error fetching partial data:', error);
      return null;
    }
  };
  
  

 
  

  useEffect(() => {
    console.log("data fetched");
    fetchDetails();
  
  }, []);

  
  // const fetchDetails = async () => {
  //   setid(loc_id?.location);
    
    

  //   try {
  //     const response = await fetch('http://localhost:3111/api/v1/tours/details', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //         search: id,
  //         type: loc_id?.type
  //       })
  //     })
      
  //     const data = await response.json();
  //     console.log(data?.data?.text);
  //     setData(data)
      
  //   } catch (error) {
  //     console.error('Error fetching image:', error);
  //   }
  // };

  useEffect(()=>{
    console.log("data fetched")
    fetchDetails();
  },[loc_id])


  return (
    <div>
      {!(dataLoc||streamedData) &&<ShimmerSimpleGallery card imageHeight={300} caption/>}
      {/* { (dataLoc||streamedData) && <CityInfo  cityData={dataLoc?streamedData: dataLoc}/>} */}
   { dataLoc&&  loc_id?.type==="city"&& (dataLoc.status === "success") && <CityInfo  cityData={dataLoc?.data}/>}
   { dataLoc&&  loc_id?.type==="landmark"&& (dataLoc.status === "success") && <LandMarkinfo  LandmarkData={dataLoc?.data?.text}/>}

   {dataLoc && (dataLoc.status === "fail") && <div className='h-screen bg-slate-300 w-[100%] text-center'>
    Opps SomeThing Went wrong !!!!!!!
  </div>}
  <Review/>
    </div>
    
  )
}

export default Destination