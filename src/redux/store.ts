import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./slices/productSlice";
import productDetailReducer from "./slices/productDetailSlice";
import cartReducer from "./slices/cartSlice";
import favoriteReducer from "./slices/favoriteSlice";
// STORE
const store = configureStore({
  reducer: {
    productList: productReducer,
    cartList: cartReducer,
    productDetails: productDetailReducer,
    favoriteList: favoriteReducer,
  },
});
export default store;
// TYPES
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
