import React from 'react';
import { Link } from 'react-router-dom';

const TopSellingPackges = () => {
  const cardStyle = {
  };

  return (
    <div className="flex flex-col md:flex-row justify-around items-center mt-16 md:space-x-4">
      <div className="card relative" style={cardStyle}>
        <img
          src="https://www.countryhillcottage.com/wp-content/uploads/2019/06/How_to_make_a_self_care_package-01-1.jpg"
          alt="Card 1"
          className="w-full md:w-64 h-48 md:h-96 object-cover rounded-lg  transform transition-transform duration-500 hover:-translate-y-10 opacity-80"
        />
        <div className="absolute bottom-0 w-full text-center bg-black bg-opacity-50 p-2">
          <h2 className="text-xl md:text-2xl font-bold text-white mt-4">Birthday</h2>
          <Link to="/birthday-packge" className="mt-4 bg-red-400 text-white py-1 px-4 rounded-full inline-block">View Details</Link>
        </div>
      </div>

      <div className="card relative" style={cardStyle}>
        <img
          src="https://i.etsystatic.com/36278622/r/il/e25042/4786242771/il_1080xN.4786242771_5jfx.jpg"
          alt="Card 2"
          className="w-full md:w-64 h-48 md:h-96 object-cover rounded-lg transform transition-transform duration-500 hover:-translate-y-10 opacity-80"
        />
        <div className="absolute bottom-0 w-full text-center bg-black bg-opacity-50 p-2">
          <h2 className="text-xl md:text-2xl font-bold text-white mt-4">Winter</h2>
          <Link to="/winter-packge" className="mt-4 bg-red-400 text-white py-1 px-4 rounded-full inline-block">View Details</Link>
        </div>
      </div>

      <div className="card relative" style={cardStyle}>
        <img
          src="https://www.3roos.com/wp-content/uploads/2019/12/2-27.jpg"
          alt="Card 3"
          className="w-full md:w-64 h-48 md:h-96 object-cover rounded-lg transform transition-transform duration-500 hover:-translate-y-10 opacity-80"
        />
        <div className="absolute bottom-0 w-full text-center bg-black bg-opacity-50 p-2">
          <h2 className="text-xl md:text-2xl font-bold text-white mt-4">Christmas </h2>
          <Link to="/roses-packge" className="mt-4 bg-red-400 text-white py-1 px-4 rounded-full inline-block">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default TopSellingPackges;
