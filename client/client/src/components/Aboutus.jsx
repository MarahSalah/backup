import React from 'react';

const AboutUs = () => {
  return (
    <section className="mt-2 md:mt-2 px-4 md:px-8 bg-gray-100 ">
      <h2 className="text-3xl font-bold mb-2 text-red-500">About Us</h2>
      <div className="flex flex-col md:flex-row items-center md:space-x-8 mb-16">
        <div className="flex-1 mb-8 md:mb-0">
          <p className="text-lg mb-8">
            At Giftify, we're more than just a gifting destination; we're a team of passionate individuals dedicated to making your special moments extraordinary.
            With a commitment to creativity, quality, and exceptional customer service, we've embarked on a journey to help you craft memories and celebrate life's beautiful moments.
          </p>
          <p className="text-lg">
            At Giftify, we're here to add a sprinkle of joy to your celebrations and a dash of warmth to your expressions.
            We're honored to be part of your life's most important moments, and we look forward to helping you create memories that last a lifetime.
          </p>
        </div>
        <div className="flex-1">
          {/* Add your image here */}
          <img
            src="https://rozyat.com/wp-content/uploads/2020/08/%D9%87%D8%AF%D8%A7%D9%8A%D8%A7.jpg"
            alt="About Us Image"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
