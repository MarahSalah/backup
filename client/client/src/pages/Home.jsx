import React from 'react';
import { Link } from 'react-router-dom';

import Hero from './Hero';
import HowDoesItWork from '../components/HowDoesItWork';
import GiftSection from '../components/GiftSection';
import TopSellingGifts from '../components/TopSellingGifts';
import TopSellingPackges from '../components/TopSellingPackges';
import TopSellingCakes from '../components/TopSellingCakes';
import TopSellingCards from '../components/TopSellingCards';
import Aboutus from '../components/Aboutus';


const Home = () => {
  return (
    <div>
      <Hero />
      <div className="mb-16"></div>
      <div className="w-2/3 mx-auto flex items-center">
        <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
        <span className="px-4 font-extrabold text-2xl text-red-500 bg-white dark:text-white dark-bg-gray-900">How does it work</span>
        <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
      </div>
      <div className="mb-16"></div>
      <HowDoesItWork />
   
      <div className="w-2/3 mx-auto flex items-center mb-16">
          <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
          <span className="px-4 font-extrabold text-2xl text-red-500 bg-white dark:text-white dark-bg-gray-900 mt-4 mb-2">Top Gifts</span>
          <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
        </div>
        
      <TopSellingGifts />
      <div className="mt-16 text-center">
        <Link to="/gifts" className="bg-indigo-900 text-white py-4 px-4 rounded-full inline-block">View All Category Gifts</Link>
      </div>
      
      
       <br/> <br/> <br/> 
      <div className="w-2/3 mx-auto flex items-center mb-16">
          <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
          <span className="px-4 font-extrabold text-2xl text-red-500 bg-white dark:text-white dark-bg-gray-900 mt-4 mb-2">Top Packges</span>
          <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
        </div>
        <TopSellingPackges />
        <div className="mt-16 text-center">
        <Link to="/giftsPackge" className="bg-indigo-900 text-white py-4 px-4 rounded-full inline-block">View All Category Packges</Link>
      </div>
      <br/> <br/> <br/> 
      <div className="w-2/3 mx-auto flex items-center mb-16">
          <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
          <span className="px-4 font-extrabold text-2xl text-red-500 bg-white dark:text-white dark-bg-gray-900 mt-4 mb-2">Top Cakes</span>
          <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
        </div>
        <TopSellingCakes />
        <div className="mt-16 text-center">
        <Link to="/giftscake" className="bg-indigo-900 text-white py-4 px-4 rounded-full inline-block">View All Category Cakes and sweets</Link>


        </div>

        <br/> <br/> <br/> 
      <div className="w-2/3 mx-auto flex items-center mb-16">
          <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
          <span className="px-4 font-extrabold text-2xl text-red-500 bg-white dark:text-white dark-bg-gray-900 mt-4 mb-2">Top Cards</span>
          <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
        </div>

        <TopSellingCards />

        <div className="mt-16 text-center">
        <Link to="/giftcard" className="bg-indigo-900 text-white py-4 px-4 rounded-full inline-block">View All Category Cards</Link>
      </div>

      <br/> <br/> <br/> 
      <br/> <br/> <br/> 
     
      <div className="mb-32"></div>

<div style={{ backgroundColor: 'rgb(39, 40, 61)' }}>
  <GiftSection/>

</div>
<br/> <br/> <br/> 

      <div data-aos="fade-up">      <Aboutus />
</div>

        </div>
  );
};

export default Home;
