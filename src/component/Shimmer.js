import React from "react";

const Shimmer = () => {
  return (
    <div className="relative bg-gray-200 my-8 rounded-md h-20 w-[100%] overflow-hidden">
      <div className="absolute inset-0 bg-gray-200 animate-shimmer"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 opacity-50"></div>
    </div>
  );
};

export default Shimmer;
