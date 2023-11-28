// GiftCategory.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import birthdayImage from '../assets/birthday.png';
import weddingImage from '../assets/wedding.png';
import christmasImage from '../assets/christmas.png';
import winterImage from '../assets/winter.png';





const Chrestmascake = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setData(response.data);
      } catch (error) {
        console.error('Error', error);
      }
    };

    fetchData();
  }, []);

  const currentItems = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // احتساب ارتفاع السايد بار بناءً على عدد العناصر في القائمة
  const sidebarHeight = `${2 + 8 * data.length}px`; // افتراضي: 2rem + (8 * عدد العناصر)

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

                  <div style={{ display: 'flex', flexDirection: 'row', marginTop: '5rem' }}>
        {/* Side Bar with Categories */}

        <aside style={{ width: '25%', padding: '20px', backgroundColor: '#24315c', color:'white', borderRadius: '1rem', height: sidebarHeight, position: 'sticky', top: '0', minHeight: '80vh', fontSize: "20px" }}>
  <ul style={{ listStyle: 'none', padding: '9', marginTop: '2rem' }}>
    <li style={{ marginBottom: '80px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
    <img src={birthdayImage} alt="Happy Birthday" style={{ width: '30px', marginRight: '10px' }} />     
    
     <Link to="/birthday-cake">Birthday</Link>
    </li>
    <li style={{ marginBottom: '80px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
    <img src={christmasImage} alt="wedding" style={{ width: '30px', marginRight: '10px' }} />
      <Link to="/christmas-cake">Christmas</Link>
    </li>
    <li style={{ marginBottom: '80px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
    <img src={weddingImage} alt="christmas" style={{ width: '30px', marginRight: '10px' }} />
      <Link to="/wedding-cake">Wedding</Link>
    </li>

    <li style={{ marginBottom: '80px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
    <img src={winterImage} alt="winter" style={{ width: '30px', marginRight: '10px' }} />
      <Link to="/winter-cake">Winter</Link>
    </li>
  </ul>
</aside>

         {/* Cards */}
         <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
          {currentItems.map((item) => (
            <div key={item.id} style={{ maxWidth: '18rem', marginBottom: '2rem' }}>
              <Link to={`/product/${item.id}`}>
                <img
                  style={{ width: '100%', height: 'auto', borderRadius: '1rem', cursor: 'pointer' }}
                  src="https://i.pinimg.com/564x/8d/ca/39/8dca39feeee992dc988c8c22cc0a2a64.jpg"
                  alt={item.title}
                />
              </Link>
              <div style={{ padding: '1rem', backgroundColor: '#fffff', borderRadius: '1rem', marginTop: '1rem' }}>
                <Link to={`/product/${item.id}`} style={{ textDecoration: 'none' }}>
                  <p style={{ fontSize: '1.2rem', color: '#27283d', marginBottom: '0.5rem' }}>{item.title}</p>
                </Link>
                <p style={{ fontSize: '1rem', color: '#27283d' }}>{item.userId}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <nav aria-label="Page navigation example">
  <ul class="flex items-center -space-x-px h-10 text-base">
    <li>
      <a href="#" class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span class="sr-only">Previous</span>
        <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
        </svg>
      </a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
    </li>
    <li>
      <a href="#" aria-current="page" class="z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span class="sr-only">Next</span>
        <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
      </a>
    </li>
  </ul>
</nav>
    </div>
  );
};

export default Chrestmascake;
