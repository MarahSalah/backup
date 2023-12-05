// MainCategory.jsx

import React, { useEffect, useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import SubCategory from './SubCategory'; 

const MainCategory = ({ category }) => {
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    fetch(`your_endpoint_here/${category}`)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setSubCategories(data.subCategories);
        }
      })
      .catch((error) => {
        console.error('Error fetching subcategories:', error);
      });
  }, [category]);

  return (
    <div className="main-category-container">
      <div className="subcategories-sidebar">
        <h2>Subcategories</h2>
        <div className="subcategories-list">
          {subCategories.map((subCategory) => (
            <Link key={subCategory} to={`/${subCategory}`} className="subcategory-link">
              {subCategory}
            </Link>
          ))}
        </div>
      </div>

      <div className="main-content">
        {/* استخدام Routes لتعيين مسارات فرعية */}
        <Routes>
          <Route path="/" element={<h1>Select a Subcategory</h1>} />
          <Route path="/:subCategory" element={<SubCategory />} />
        </Routes>
      </div>
    </div>
  );
};

export default MainCategory;
