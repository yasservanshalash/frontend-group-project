import { createSlice } from "@reduxjs/toolkit";

import { ProductType } from "./../../types/types";
// TYPE
type IntialState = {
  productDetails: ProductType;
};
// INITIAL STATE
const initialState: IntialState = {
  productDetails: {
    id: 1,
    title: "",
    price: 1,
    image: "",
    rating: { rate: 1, count: 1 },
    description: "",
    category: "",
    quantity: 1,
  },
};
// SLICE
const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {
    getProductDetail: (state, action) => {
      state.productDetails = action.payload;
    },
  },
});
// ACTIONS
export const productDetailSliceActions = productDetailSlice.actions;
// REDUCER
const productDetailReducer = productDetailSlice.reducer;
export default productDetailReducer;
