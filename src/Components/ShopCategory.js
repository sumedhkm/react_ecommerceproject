// src/Components/ShopCategory.js

import React, { useContext } from 'react';
import './ShopCategory.css';
import dropdown_icon from './Assets/dropdown_icon.png'
import Item from "../Components/Item/Item"

import all_product  from './Assets/all_product';
import { ShopContext } from './ShopContext';


const ShopCategory = ({ category,banner }) => {
//  const {all_product}=useContext(ShopContext)
//  console.log(all_product);
  return (
    <div className='shopcategory'>
      <img className="shopcategory-banner" src={banner} alt='Category Banner' />
     <div className='shopcategory-indexs'>
        <p>
            <span>
               Showing 1-12 
            </span> Out of 36 products
        </p>
        <div className='shopcategory-sort'>
            sort by <img src={dropdown_icon} alt='dropdown_icon'/>
            
        </div>
     </div>
     <div className='shopcategoryproducts'>
      {all_product.map((item,i)=>{
        if(category===item.category){
          return <Item key={item.id}
          id={item.id}
          name={item.name}  // Pass the name to Item component
          image={item.image}
          new_price={item.new_price.toString()}
          old_price={item.old_price.toString()}/>

        }
        else{
          return null;
        }
      })
}
     </div>
     <div className='shopcategory-loadmore'>
Explore More
     </div>
    </div>
  );
};

export default ShopCategory;
