import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./slices/producttSlice";
import productDetailReducer from "./slices/productDetailSlice";
import cartSliceReducer from "./slices/cartSlice";
import favoriteReducer from "./slices/favoriteSlice";

const store = configureStore({
  reducer: {
    productList: productReducer,
    cartList: cartSliceReducer,
    productDetails: productDetailReducer,
    favoriteList: favoriteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
