import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/producttSlice";
import cartProductReducer from "./slices/cartSlice";
import favProductReducer from "./slices/favoriteSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartProductReducer,
    favoriteProducts: favProductReducer,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
