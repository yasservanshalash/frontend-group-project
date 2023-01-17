import { createSlice } from "@reduxjs/toolkit";

import { ProductType } from "./../../types/types";

type IntialState = {
  cartList: ProductType[];
};

const initialState: IntialState = {
  cartList: [],
};

const cartProductSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      const index = state.cartList.findIndex(
        (cartItem) => cartItem.title === action.payload.title
      );
      if (index !== -1) {
        state.cartList[index].quantity += 1;
      }
      state.cartList.push(action.payload);
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
        if (state.cartList[index].quantity >= 1) {
          state.cartList[index].quantity -= 1;
        }
      }
    },
    removeCartItem: (state, action) => {
      const removeItem = state.cartList.filter(
        (item) => item.id !== action.payload
      );
      state.cartList = removeItem;
    },
  },
});

export const cartProductSliceActions = cartProductSlice.actions;
const cartProductReducer = cartProductSlice.reducer;
export default cartProductReducer;
