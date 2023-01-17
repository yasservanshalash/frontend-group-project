import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./slices/producttSlice";
import productDetailReducer from "./slices/productDetailSlice";
import cartReducer from "./slices/cartSlice";
import favoriteReducer from "./slices/favoriteSlice";

const store = configureStore({
  reducer: {
    productList: productReducer,
    cartList: cartReducer,
    productDetails: productDetailReducer,
    favoriteReducer: favoriteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
