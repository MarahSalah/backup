import React from 'react';
import { Link } from 'react-router-dom';

const TopSellingCards = () => {
  const cardStyle = {
  };

  return (
    <div className="flex flex-col md:flex-row justify-around items-center mt-16 md:space-x-4 ">
      <div className="card relative" style={cardStyle}>
        <img
          src="data:image/jpeg;base64,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"
          alt="Card 1"
          className="w-full md:w-64 h-48 md:h-96 object-cover rounded-lg  transform transition-transform duration-500 hover:-translate-y-10 opacity-80"
        />
        <div className="absolute bottom-0 w-full text-center bg-black bg-opacity-50 p-2 ">
          <h2 className="text-xl md:text-2xl font-bold text-white mt-4">Wedding</h2>
          <Link to="/birthday" className="mt-4 bg-red-400 text-white py-1 px-4 rounded-full inline-block">View Details</Link>
        </div>
      </div>

      <div className="card relative" style={cardStyle}>
        <img
          src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/a6a30eb675d166dd5455484ec270a6af.jpg?imageView2/2/w/500/q/60/format/webp"
          alt="Card 2"
          className="w-full md:w-64 h-48 md:h-96 object-cover rounded-lg transform transition-transform duration-500 hover:-translate-y-10 opacity-80"
        />
        <div className="absolute bottom-0 w-full text-center bg-black bg-opacity-50 p-2">
          <h2 className="text-xl md:text-2xl font-bold text-white mt-4">Christmas</h2>
          <Link to="/winter" className="mt-4 bg-red-400 text-white py-1 px-4 rounded-full inline-block">View Details</Link>
        </div>
      </div>

      <div className="card relative" style={cardStyle}>
        <img
          src="https://sa-jewel.com/cdn/shop/products/happybithdaycardgift_1-277865_1080x.png?v=1642379929"
          alt="Card 3"
          className="w-full md:w-64 h-48 md:h-96 object-cover rounded-lg transform transition-transform duration-500 hover:-translate-y-10 opacity-80"
        />
        <div className="absolute bottom-0 w-full text-center bg-black bg-opacity-50 p-2">
          <h2 className="text-xl md:text-2xl font-bold text-white mt-4">Birthday </h2>
          <Link to="/roses" className="mt-4 bg-red-400 text-white py-1 px-4 rounded-full inline-block">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default TopSellingCards;
