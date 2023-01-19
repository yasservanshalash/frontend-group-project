import { createSlice } from "@reduxjs/toolkit";

import { ProductType } from "./../../types/types";

// TYPE
type InitialState = {
  cartList: ProductType[];
};
// GET ITEM
const items: ProductType[] =
  localStorage.getItem("cartlist") !== null
    ? JSON.parse(localStorage.getItem("cartlist")!)
    : [];
// INITIAL STATE
const initialState: InitialState = {
  cartList: items,
};
// SLICE
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // ADD TO CART
    addTocart: (state, action) => {
      const index = state.cartList.findIndex(
        (cartItem) => cartItem.title === action.payload.title
      );
      if (index !== -1) {
        state.cartList[index].quantity += 1;
      } else {
        state.cartList.push(action.payload);
        // SETITEM;
        localStorage.setItem(
          "cartlist",
          JSON.stringify(state.cartList.map((item: ProductType) => item))
        );
      }
    },
    // INCREMENT
    incrementQuantity: (state, action) => {
      const index = state.cartList.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.cartList[index].quantity += 1;
      }
      localStorage.setItem(
        "cartlist",
        JSON.stringify(state.cartList.map((item: ProductType) => item))
      );
    },
    // DECREMENT
    decrementQuantity: (state, action) => {
      const index = state.cartList.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        if (state.cartList[index].quantity > 1) {
          state.cartList[index].quantity -= 1;
        }
      }
      localStorage.setItem(
        "cartlist",
        JSON.stringify(state.cartList.map((item: ProductType) => item))
      );
    },
    // REMOVE
    removeCartItem: (state, action) => {
      const removeItem = state.cartList.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartList = removeItem;
      localStorage.setItem(
        "cartlist",
        JSON.stringify(state.cartList.map((item: ProductType) => item))
      );
    },
  },
});
// ACTIONS
export const cartSliceActions = cartSlice.actions;
// REDUCER
const cartSliceReducer = cartSlice.reducer;
export default cartSliceReducer;
