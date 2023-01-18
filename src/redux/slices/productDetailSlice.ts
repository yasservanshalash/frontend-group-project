import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ProductType } from "./../../types/types";

type IntialState = {
  productDetails: ProductType;
};
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
    total: 0,
  },
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
