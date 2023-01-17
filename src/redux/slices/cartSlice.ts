import { ProductType } from "./../../types/types";
import { createSlice } from "@reduxjs/toolkit";
 
type IntialState = {
  cartData: ProductType[];
};
 
const initialState: IntialState = {
  cartData: [],
};
 
const cartProductSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartProduct: (state, action) => {
      state.cartData = action.payload;
    },
  },
});

export const cartProductSliceActions = cartProductSlice.actions;
const cartProductReducer = cartProductSlice.reducer;
export default cartProductReducer;