import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./slices/producttSlice";
import productDetailReducer from "./slices/productDetailSlice";
<<<<<<< HEAD
import cartReducer from "./slices/cartSlice";
=======
import cartSliceReducer from "./slices/cartSlice";
>>>>>>> 376042a9ca4e74bf88af0ead8aa93fc2c6b940ee
import favoriteReducer from "./slices/favoriteSlice";

const store = configureStore({
  reducer: {
    productList: productReducer,
    cartList: cartReducer,
    productDetails: productDetailReducer,
<<<<<<< HEAD
    favoriteReducer: favoriteReducer,
=======
    favoriteList: favoriteReducer,
>>>>>>> 376042a9ca4e74bf88af0ead8aa93fc2c6b940ee
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
