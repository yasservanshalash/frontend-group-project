import { ProductType } from "./../../types/types";
import { createSlice } from "@reduxjs/toolkit";

type IntialState = {
  products: ProductType[];
};
const initialState: IntialState = {
  products: [],
};
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProduct: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const productSliceActions = productSlice.actions;
const productReducer = productSlice.reducer;
export default productReducer;
