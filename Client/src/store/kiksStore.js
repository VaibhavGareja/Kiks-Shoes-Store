import { configureStore } from "@reduxjs/toolkit";
import closeBtnReducer from './closeBtnSlice';
import productsReducer  from "./productSlice"
import cartSlice from "./cartSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    closeBtn: closeBtnReducer,
    products: productsReducer,
    cart: cartSlice,
    user: userSlice
  },
});

export default store;