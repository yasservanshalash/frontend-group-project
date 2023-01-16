import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
