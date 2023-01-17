import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ProductType } from "./../../types/types";

type IntialState = {
  productDetails: ProductType[];
};
const initialState: IntialState = {
  productDetails: [],
};
const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {
    getProductDetail: (state, action) => {
      state.productDetails = action.payload;
    },
  },
});

export const productDetailSliceActions = productDetailSlice.actions;
const productDetailReducer = productDetailSlice.reducer;
export default productDetailReducer;
