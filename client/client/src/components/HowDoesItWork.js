import React from 'react';
import smallArrow1 from '../assets/small-arrow-1.png';

const HowDoesItWork = () => {
  return (
    <div className="flex items-center">
      <div className="flex flex-col items-center m-2 justify-center lg:justify-start max-w-screen-xl mx-auto">
        <img
          src="https://images.pexels.com/photos/6177618/pexels-photo-6177618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Image 1"
          className="w-96 h-96 rounded-full transform transition-transform duration-500 hover:-translate-y-10"
        />
        <p className="text-2xl text-navy mt-2">Choose Your Selection</p>
      </div>

      <div className="w-16">
        <img src={smallArrow1} alt="Small Arrow" />
      </div>

      <div className="flex flex-col items-center m-2 justify-center lg:justify-start max-w-screen-xl mx-auto">
        
        <img
          src="https://i.etsystatic.com/12657318/r/il/295dda/3537039096/il_570xN.3537039096_deh4.jpg"
          alt="Image 2"
          className="w-96 h-96 rounded-full transform transition-transform duration-500 hover:-translate-y-10"
        />
        <p className="text-2xl text-navy mt-2">Personalize Your Choices</p>
      </div>
      
      <div className="w-16">
        <img src={smallArrow1} alt="Small Arrow" />
      </div>

      <div className="flex flex-col items-center m-2 justify-center lg:justify-start max-w-screen-xl mx-auto">
        <img
          src="https://sendgiftsineurope.com/wp-content/uploads/2023/08/Walwater-Gifts-Background-HP-1-scaled-1200x675.jpg"
          alt="Image 3"
          className="w-96 h-96 rounded-full transform transition-transform duration-500 hover:-translate-y-10"
        />
        <p className="text-2xl text-navy mt-2">Enjoy Hassle Delivery</p>
      </div>
    </div>
  );
};

export default HowDoesItWork;
