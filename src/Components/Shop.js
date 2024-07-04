import React from 'react';
import Hero from './Hero';
import Offers from './Offers';
import NewCollections from './NewCollections/NewCollections';
import Popular from './Popular/Popular';
import NewsLetter from './NewsLetter/NewsLetter';

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
       <Offers/>
       <NewCollections/>
       <NewsLetter />
   
    </div>
  );
};

export default Shop;
