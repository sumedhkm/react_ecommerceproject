import { createSlice } from '@reduxjs/toolkit';
import all_product from '../Assets/all_product';

const productsSlice = createSlice({
  name: 'products',
  initialState: all_product,
  reducers: {
    setProducts: (state, action) => {
      return action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
