// GiftCategory.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainCategory from './MainCategory';
import SubCategory from './SubCategory';

const GiftCategory = () => {
  return (
    <div>
      <h1>Gift Category</h1>
      <Routes>
        <Route path="/" element={<MainCategory category="gift" />} />
        <Route path=":subCategory" element={<SubCategory />} />
      </Routes>
    </div>
  );
};

export default GiftCategory;
