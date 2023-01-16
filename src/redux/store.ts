import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./slices/producttSlice";

const store = configureStore({
  reducer: {
    productList: productReducer,
    // cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
