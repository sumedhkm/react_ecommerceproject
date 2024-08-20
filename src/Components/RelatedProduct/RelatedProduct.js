import React from 'react';
import './RelatedProduct.css';
import data_product from '../Assets/data';
import Item from '../Item/Item';

const RelatedProduct = () => {
  return (
    <div className='relatedproduct'>
      <h1>Related products</h1>
      <hr/>
      <div className='relatedproduct-item'>
        {data_product.map((item, i) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}  // Pass the name to Item component
              image={item.image}
              new_price={item.new_price.toString()}
              old_price={item.old_price.toString()} />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProduct;
