import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define async thunks
export const fetchCartItems = createAsyncThunk('cart/fetchCartItems', async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/shop/citems/');
    return response.data;
});

export const addCartItem = createAsyncThunk('cart/addCartItem', async (cartItemData) => {
    const response = await axios.post('http://127.0.0.1:8000/api/shop/citems/', cartItemData);
    return response.data;
});

export const updateCartItem = createAsyncThunk('cart/updateCartItem', async (cartItemData) => {
    const response = await axios.put(`http://127.0.0.1:8000/api/shop/citems/${cartItemData.id}/`, cartItemData);
    return response.data;
});

export const deleteCartItem = createAsyncThunk('cart/deleteCartItem', async (id) => {
    await axios.delete(`http://127.0.0.1:8000/api/shop/citems/${id}/`);
    return id;
});

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // Initially, the cart is empty
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Fetch cart items
            .addCase(fetchCartItems.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCartItems.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchCartItems.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // Add cart item
            .addCase(addCartItem.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addCartItem.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items.push(action.payload);
            })
            .addCase(addCartItem.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // Update cart item
            .addCase(updateCartItem.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateCartItem.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const index = state.items.findIndex(item => item.id === action.payload.id);
                if (index !== -1) {
                    state.items[index] = action.payload;
                }
            })
            .addCase(updateCartItem.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // Delete cart item
            .addCase(deleteCartItem.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteCartItem.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = state.items.filter(item => item.id !== action.payload);
            })
            .addCase(deleteCartItem.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default cartSlice.reducer;
