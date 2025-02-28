import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; // Default import

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
