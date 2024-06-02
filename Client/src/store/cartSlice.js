import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [], 
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { id, name, price, imgSrc, quantity } = action.payload;
      const existingProductIndex = state.products.findIndex(product => product.id === id);
      if (existingProductIndex !== -1) {
        state.products[existingProductIndex].quantity += quantity;
      } else {
        state.products.push({ id, name, price, imgSrc, quantity });
      }
    },
    removeFromCart(state, action) {
      state.products = state.products.filter(product => product.id !== action.payload);
    },
    clearCart(state) {
      state.products = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
