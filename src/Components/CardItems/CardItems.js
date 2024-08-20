import React, { useEffect } from 'react';
import './CardItems.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCartItems, addCartItem, updateCartItem, deleteCartItem } from '../Redux/CartSlice';
import { getTotalCartAmount } from '../Redux/Selectors';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
    const dispatch = useDispatch();
    const all_product = useSelector(state => state.products);
    const cartItems = useSelector(state => state.cart.items);
    const status = useSelector(state => state.cart.status);
    const error = useSelector(state => state.cart.error);
    const totalAmount = useSelector(getTotalCartAmount);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCartItems());
        }
    }, [dispatch, status]);

    const handleAddToCart = async (productId) => {
        const existingItem = cartItems.find(item => item.product_id === String(productId));
        const quantity = existingItem ? existingItem.quantity + 1 : 1;
        const product = all_product.find(p => p.id === productId);
        const cartItemData = {
            cart_id: '1', 
            user_id: 2,    
            product_id: String(productId),
            quantity,
            amount: product.new_price * quantity,
        };

        if (existingItem) {
            await dispatch(updateCartItem({ ...cartItemData, id: existingItem.id }));
        } else {
            await dispatch(addCartItem(cartItemData));
        }
    };

    const handleRemoveFromCart = async (productId) => {
        const itemToRemove = cartItems.find(item => item.product_id === String(productId));
        if (itemToRemove) {
            if (itemToRemove.quantity > 1) {
                const updatedItem = {
                    ...itemToRemove,
                    quantity: itemToRemove.quantity - 1,
                    amount: itemToRemove.amount - all_product.find(p => p.id === productId).new_price
                };
                await dispatch(updateCartItem(updatedItem));
            } else {
                await dispatch(deleteCartItem(itemToRemove.id));
            }
        }
    };

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='carditems'>
            <div className='carditem-format-main'>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                const cartItem = cartItems.find(item => item.product_id === String(e.id));
                if (cartItem) {
                    return (
                        <div key={e.id}>
                            <div className='carditem-format carditem-format-main'>
                                <img src={e.image} alt='' className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button 
                                    className='cartitems-quantity'
                                    onClick={() => handleAddToCart(e.id)}
                                >
                                    {cartItem.quantity}
                                </button>
                                <p>${e.new_price * cartItem.quantity}</p>
                                <img
                                    className='carditems-remove-icon'
                                    src={remove_icon}
                                    onClick={() => handleRemoveFromCart(e.id)}
                                    alt=''
                                />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
            <div className='carditems-down'>
                <div className='carditems-total'>
                    <h1>Cart Totals</h1>
                    <div>
                        <div className='cartitems-total-item'>
                            <p>SubTotal</p>
                            <p>${totalAmount}</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-item'>
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-item'>
                            <h3>Total</h3>
                            <h3>${totalAmount}</h3>
                        </div>
                        <button>Proceed to checkout</button>
                    </div>
                </div>
                <div className='carditems-promocode'>
                    <p>If you have a promo code, enter it here</p>
                    <div className='carditems-promobox'>
                        <input type='text' placeholder='Promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems;
