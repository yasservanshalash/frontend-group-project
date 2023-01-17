import { ProductType } from "./../../types/types";
import { createSlice } from "@reduxjs/toolkit";

type IntialState = {
  productsData: ProductType[];
};
const initialState: IntialState = {
  productsData: [],
};
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProduct: (state, action) => {
      state.productsData = action.payload;
    },
  },
});

export const productSliceActions = productSlice.actions;
const productReducer = productSlice.reducer;
export default productReducer;
