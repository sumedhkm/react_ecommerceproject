// src/Redux/Selectors.js
export const getTotalCartAmount = (state) => {
  // Log the entire state to inspect its structure
  console.log("State:", state);
  
  // Destructure cart and products from state
  const cart = state.cart?.items || []; // Default to empty array if undefined
  const products = state.products || []; // Default to empty array if undefined

  // Calculate the total amount
  return cart.reduce((totalAmount, item) => {
    const product = products.find((p) => p.id === Number(item.product_id));
    if (product) {
      totalAmount += product.new_price * item.quantity;
    }
    return totalAmount;
  }, 0);
};
