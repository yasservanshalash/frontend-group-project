import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./slices/producttSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    // cart: cartReducer,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
