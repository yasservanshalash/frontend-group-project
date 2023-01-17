import { createSlice } from "@reduxjs/toolkit";

import { ProductType } from "./../../types/types";

// type IntialState = {
//   cartList: ProductType[];
// };

// const initialState: IntialState = {
//   cartList: [],
// };

// const cartProductSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addTocart: (state, action) => {
//       const index = state.cartList.findIndex(
//         (cartItem) => cartItem.title === action.payload.title
//       );
//       if (index !== -1) {
//         state.cartList[index].quantity += 1;
//       }
//       state.cartList.push(action.payload);
//     },
//     increaseItemQuantity: (state, action) => {
//       const item = state.cartList.find((item) => item.id === action.payload.id);
//       item?.quantity
//     },
//     decreaseItemQuantity: (state, action) => {
//       const item = state.cartList.find((item) => item.id === action.payload.id);
//       if (item.quantity === 1) {
//         item?.quantity === 1;
//       } else {
//         item.quantity -= 1;
//       }
//     },
//     removeCartItem: (state, action) => {
//       const removeItem = state.cartList.filter(
//         (item) => item.id !== action.payload
//       );
//       state.cartList = removeItem;
//     },
//   },
// });

// export const cartProductSliceActions = cartProductSlice.actions;
// const cartProductReducer = cartProductSlice.reducer;
// export default cartProductReducer;
