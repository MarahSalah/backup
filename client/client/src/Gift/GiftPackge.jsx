// GiftPackge.js

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import birthdayImage from '../assets/birthday.png';
import weddingImage from '../assets/wedding.png';
import christmasImage from '../assets/christmas.png';
import winterImage from '../assets/winter.png';

const GiftPackge = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const navigate = useNavigate();

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
    
     <Link to="/birthday-Packge">Birthday</Link>
    </li>
    <li style={{ marginBottom: '80px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
    <img src={christmasImage} alt="wedding" style={{ width: '30px', marginRight: '10px' }} />
      <Link to="/christmas-Packge">Christmas</Link>
    </li>
    <li style={{ marginBottom: '80px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
    <img src={weddingImage} alt="christmas" style={{ width: '30px', marginRight: '10px' }} />
      <Link to="/wedding-Packge">Wedding</Link>
    </li>
   
    <li style={{ marginBottom: '80px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
    <img src={winterImage} alt="winter" style={{ width: '30px', marginRight: '10px' }} />
      <Link to="/winter-Packge">Winter</Link>
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
                  src="data:image/jpeg;base64,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"
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
 
export default GiftPackge;
