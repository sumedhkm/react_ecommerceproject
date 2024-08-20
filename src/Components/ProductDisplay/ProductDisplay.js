import React from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem, updateCartItem } from '../Redux/CartSlice';

const ProductDisplay = (props) => {
    const { product } = props;
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    const handleAddToCart = async () => {
        const existingItem = cartItems.find(item => item.product_id === String(product.id));
        const quantity = existingItem ? existingItem.quantity + 1 : 1;
        const cartItemData = {
            cart_id: '1',  
            user_id: 2,    
            product_id: String(product.id),
            quantity,
            amount: product.new_price * quantity,
        };

        if (existingItem) {
            // Update existing item
            await dispatch(updateCartItem({ ...cartItemData, id: existingItem.id }));
        } else {
            // Add new item
            await dispatch(addCartItem(cartItemData));
        }
    };

    return (
        <div className='productdisplay'>
            <div className='productdisplay-left'>
                <div className='productdisplay-img-list'>
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                </div>
                <div className='productdisplay-img'>
                    <img className='productdisplay-main-img' src={product.image} alt='' />
                </div>
            </div>
            <div className='productdisplay-right'>
                <h1>{product.name}</h1>
                <div className='productdisplay-right-star'>
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_dull_icon} alt='' />
                    <p>(122)</p>
                </div>
                <div className='productdisplay-right-prices'>
                    <div className='productdisplay-right-price-old'>${product.old_price}</div>
                    <div className='productdisplay-right-price-new'>${product.new_price}</div>
                </div>
                <div className='product-right-description'>
                    A lightweight, usually knitted, pullover shirt, close-fitting and with
                    a round neckline and short sleeves, worn as an undershirt or outer
                    garment.
                </div>
                <div className='productdisplay-right-size'>
                    <h1>Select Size</h1>
                    <div className='productdisplay-right-size1'>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={handleAddToCart}>ADD TO CART</button>
                <p className='productdisplay-right-category'>
                    <span>Category: </span>Women, T-Shirt, Crop Top
                </p>
                <p className='productdisplay-right-category'>
                    <span>Tags: </span>Modern, Latest
                </p>
            </div>
        </div>
    );
};

export default ProductDisplay;
