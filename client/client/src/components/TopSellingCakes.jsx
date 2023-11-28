import React from 'react';
import { Link } from 'react-router-dom';

const TopSellingGifts = () => {
  const cardStyle = {
  };

  return (
    <div className="flex flex-col md:flex-row justify-around items-center mt-16 md:space-x-4">
      <div className="card relative" style={cardStyle}>
        <img
          src="https://cdn.shopify.com/s/files/1/0741/2259/2535/products/beautiful-anniversary-cake-8-portions-vanilla_1.jpg?v=1688705770"
          alt="Card 1"
          className="w-full md:w-64 h-48 md:h-96 object-cover rounded-lg  transform transition-transform duration-500 hover:-translate-y-10 opacity-80"
        />
        <div className="absolute bottom-0 w-full text-center bg-black bg-opacity-50 p-2">
          <h2 className="text-xl md:text-2xl font-bold text-white mt-4">Wedding</h2>
          <Link to="/birthday-cake" className="mt-4 bg-red-400 text-white py-1 px-4 rounded-full inline-block">View Details</Link>
        </div>
      </div>

      <div className="card relative" style={cardStyle}>
        <img
          src="https://i0.wp.com/sha3lelha.com/wp-content/uploads/2022/12/9482fad111936f88ce029004168f8e8e-281x281.jpg"
          alt="Card 2"
          className="w-full md:w-64 h-48 md:h-96 object-cover rounded-lg transform transition-transform duration-500 hover:-translate-y-10 opacity-80"
        />
        <div className="absolute bottom-0 w-full text-center bg-black bg-opacity-50 p-2">
          <h2 className="text-xl md:text-2xl font-bold text-white mt-4">Christmas</h2>
          <Link to="/winter-cake" className="mt-4 bg-red-400 text-white py-1 px-4 rounded-full inline-block">View Details</Link>
        </div>
      </div>

      <div className="card relative" style={cardStyle}>
        <img
          src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/c8faabe1de87abc38a307f886936155b.jpg?imageView2/2/w/500/q/60/format/webp"
          alt="Card 3"
          className="w-full md:w-64 h-48 md:h-96 object-cover rounded-lg transform transition-transform duration-500 hover:-translate-y-10 opacity-80"
        />
        <div className="absolute bottom-0 w-full text-center bg-black bg-opacity-50 p-2">
          <h2 className="text-xl md:text-2xl font-bold text-white mt-4">Birthday </h2>
          <Link to="/roses-cake" className="mt-4 bg-red-400 text-white py-1 px-4 rounded-full inline-block">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default TopSellingGifts;
