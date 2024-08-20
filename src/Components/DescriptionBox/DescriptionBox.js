import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className='descriptionbox-navigator'>
        <div className='description-nav-box'>Description</div>
        <div className='description-nav-box fade'>Reviews(122)</div>
      </div>
      <div className='descriptionbox-description'>
        <p>
          This e-commerce project provides an immersive shopping experience where users can browse through various product categories, view detailed product information, and easily add items to their shopping cart. Shopping is an activity where individuals browse, select,
         and purchase goods or services. It can be done in physical stores or online, 
          offering convenience and a wide variety of options. Online shopping, in particular, provides the ability to compare prices, read reviews, and have items delivered to your doorstep. It's a popular and integral part of modern consumer behavior, 
          catering to various needs and preferences.
        </p>
        <p>Shopping is an activity where individuals browse, 
            select, and purchase goods or services. It can be done
             in physical stores or online, offering convenience 
             and a wide variety of options. Online shopping, in 
             particular, provides the ability to compare prices,
              read reviews, and have items delivered to your 
              doorstep. It's a popular and integral part of modern
               consumer behavior, catering to various needs and 
               preferences</p>
      </div>
    </div>
  );
};

export default DescriptionBox;
