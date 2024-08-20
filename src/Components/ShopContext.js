import React, { createContext, useState, useEffect } from 'react';
import all_product from "./Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    all_product.forEach(product => {
        cart[product.id] = 0;
    });
    return cart;
};

const ShopContextProvider = (props) => {
    // const [cartitem, setcartitem] = useState(getDefaultCart());

    // useEffect(() => {
    //     console.log(cartitem);
    // }, [cartitem]);

    // const addToCart = (itemId) => {
    //     setcartitem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    // };

    // const removeFromCart = (itemId) => {
    //     setcartitem((prev) => ({ ...prev, [itemId]: Math.max(prev[itemId] - 1, 0) }));
    // };

    // const getTotalCartAmout = () => {
    //     let totalAmount = 0;
    //     for (const item in cartitem) {
    //         if (cartitem[item] > 0) {
    //             let itemInfo = all_product.find((product) => product.id === Number(item));
    //             if (itemInfo) {
    //                 totalAmount += itemInfo.new_price * cartitem[item];
    //             }
    //         }
    //     }
    //     return totalAmount;
    // };

    // const getTotalCartItems = () => {
    //     let totalItem = 0;
    //     for (const item in cartitem) {
    //         if (cartitem[item] > 0) {
    //             totalItem += cartitem[item];
    //         }
    //     }
    //     return totalItem;
    // };

    // const contextValue = { getTotalCartItems, getTotalCartAmout, all_product, cartitem, addToCart, removeFromCart };

    // return (
    //     <ShopContext.Provider value={contextValue}>
    //         {/* {props.children} */}
    //     </ShopContext.Provider>
    // );
};

export default ShopContextProvider;
