import { createSlice } from "@reduxjs/toolkit";

import { ProductType } from "./../../types/types";
// TYPE
type InitialState = {
  cartList: ProductType[];
};
// INITIAL STATE
const initialState: InitialState = {
  cartList: [],
};
// SLICE
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // CASES
    addTocart: (state, action) => {
      const index = state.cartList.findIndex(
        (cartItem) => cartItem.title === action.payload.title
      );
      if (index !== -1) {
        state.cartList[index].quantity += 1;
      } else {
        state.cartList.push(action.payload);
      }
    },
    incrementQuantity: (state, action) => {
      const index = state.cartList.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.cartList[index].quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const index = state.cartList.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        if (state.cartList[index].quantity > 1) {
          state.cartList[index].quantity -= 1;
        }
      }
    },
    removeCartItem: (state, action) => {
      const removeItem = state.cartList.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartList = removeItem;
    },
  },
});
// ACTIONS
export const cartSliceActions = cartSlice.actions;
// REDUCER
const cartSliceReducer = cartSlice.reducer;
export default cartSliceReducer;
