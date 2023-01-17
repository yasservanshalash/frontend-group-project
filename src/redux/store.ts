import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./slices/producttSlice";
import productDetailReducer from "./slices/productDetailSlice";

const store = configureStore({
  reducer: {
    productList: productReducer,
    // cart: cartReducer,
    productDetails: productDetailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
