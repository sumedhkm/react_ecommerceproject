// src/Components/ShopCategory.js

import React from 'react';
import './ShopCategory.css';

const ShopCategory = ({ banner }) => {
  return (
    <div className='shopcategory'>
      <img src={banner} alt='Category Banner' />
      {/* Other content for ShopCategory */}
    </div>
  );
};

export default ShopCategory;
