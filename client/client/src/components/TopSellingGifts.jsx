import React from 'react';
import { Link } from 'react-router-dom';

const TopSellingGifts = () => {
  const cardStyle = {
  };

  return (
    <div className="flex flex-col md:flex-row justify-around items-center mt-16 md:space-x-4">
      <div className="card relative" style={cardStyle}>
        <img
          src="https://images.pexels.com/photos/7826332/pexels-photo-7826332.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Card 1"
          className="w-full md:w-128 h-48 md:h-96 object-cover rounded-lg  transform transition-transform duration-500 hover:-translate-y-10 opacity-80"
        />
        <div className="absolute bottom-0 w-full text-center bg-black bg-opacity-50 p-2">
          <h2 className="text-xl md:text-2xl font-bold text-white mt-4">Birthday</h2>
          <Link to="/birthday-gifts" className="mt-4 bg-red-400 text-white py-1 px-4 rounded-full inline-block">View Details</Link>
        </div>
      </div>

      <div className="card relative" style={cardStyle}>
        <img
          src="https://images.pexels.com/photos/6102395/pexels-photo-6102395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Card 2"
          className="w-full md:w-64 h-48 md:h-96 object-cover rounded-lg transform transition-transform duration-500 hover:-translate-y-10 opacity-80"
        />
        <div className="absolute bottom-0 w-full text-center bg-black bg-opacity-50 p-2">
          <h2 className="text-xl md:text-2xl font-bold text-white mt-4">Winter</h2>
          <Link to="/winter-gifts" className="mt-4 bg-red-400 text-white py-1 px-4 rounded-full inline-block">View Details</Link>
        </div>
      </div>

      <div className="card relative" style={cardStyle}>
        <img
          src="https://images.pexels.com/photos/2831040/pexels-photo-2831040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Card 3"
          className="w-full md:w-64 h-48 md:h-96 object-cover rounded-lg transform transition-transform duration-500 hover:-translate-y-10 opacity-80"
        />
        <div className="absolute bottom-0 w-full text-center bg-black bg-opacity-50 p-2">
          <h2 className="text-xl md:text-2xl font-bold text-white mt-4">Roses</h2>
          <Link to="/roses-gifts" className="mt-4 bg-red-400 text-white py-1 px-4 rounded-full inline-block">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default TopSellingGifts;
