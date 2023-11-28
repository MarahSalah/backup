import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % totalSlides);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);

  return (
    <div className="relative">
      <Carousel
        showStatus={false}
        showArrows={false}
        selectedItem={currentSlide}
        onChange={setCurrentSlide}
        autoPlay
        infiniteLoop
        interval={5000}
        dynamicHeight={false}
        showThumbs={false}
      >
        <div>
          <div
            className="hero-slide"
            style={{
              backgroundImage:
                'url("https://images.pexels.com/photos/6063706/pexels-photo-6063706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
            }}
          >
            <div className="hero-text">
              <h1 className="text-xl md:text-3xl lg:text-5xl text-white font-bold mb-4">
                Welcome to Our Awesome Website
              </h1>
              <p className="text-white text-lg lg:text-2xl mb-6">
                Discover amazing features and services that await you.
              </p>
              <Link to="/Oss">
                <button className="bn632-hover bn28" id="button">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div
            className="hero-slide"
            style={{
              backgroundImage:
                'url("https://images.pexels.com/photos/13263947/pexels-photo-13263947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
            }}
          >
            <div className="hero-text">
              <h1 className="text-xl md:text-3xl lg:text-5xl text-white font-bold mb-4">
                Welcome to Our Awesome Website
              </h1>
              <p className="text-white text-lg lg:text-2xl mb-6">
                Discover amazing features and services that await you.
              </p>
              <Link to="/Oss">
                <button className="bn632-hover bn28" id="button">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div
            className="hero-slide"
            style={{
              backgroundImage:
                'url("https://images.pexels.com/photos/10853959/pexels-photo-10853959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
            }}
          >
            <div className="hero-text">
              <h1 className="text-xl md:text-3xl lg:text-5xl text-white font-bold mb-4">
                Welcome to Our Awesome Website
              </h1>
              <p className="text-white text-lg lg:text-2xl mb-6">
                Discover amazing features and services that await you.
              </p>
              <Link to="/Oss">
                <button className="bn632-hover bn28" id="button">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
