import React from 'react';
import PropTypes from 'prop-types';  // Import PropTypes for prop validation
import './Item.css';  // Import the CSS file for Item component styles

const Item = ({ id, name, image, new_price, old_price }) => {
  return (
    <div className='item'>
      <img src={image} alt={name} />  {/* Provide meaningful alt text */}
      <div className='item-info'>
        <p>{name}</p>  {/* Display the item name */}
        <div className='item-prices'>
          <div className='item-price-new'>
           $ {new_price}  {/* Display the new price without $ */}
          </div>
          {old_price && (
            <div className='item-price-old'>
              ${old_price}  {/* Display the old price without $ */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Define PropTypes for the component
Item.propTypes = {
  id: PropTypes.number.isRequired,       // id should be a number and is required
  name: PropTypes.string.isRequired,    // name should be a string and is required
  image: PropTypes.string.isRequired,   // image should be a string (URL) and is required
  new_price: PropTypes.string.isRequired,  // new_price should be a string and is required
  old_price: PropTypes.string,          // old_price should be a string and is optional
};

export default Item;
