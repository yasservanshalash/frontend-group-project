import { ProductType } from "./../../types/types";
import { createSlice } from "@reduxjs/toolkit";

type IntialState = {
  products: ProductType[];
  filteredProduct: ProductType[];
};
const initialState: IntialState = {
  products: [],
  filteredProduct: [],
};
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProductData: (state, action) => {
      state.products = action.payload;
      state.filteredProduct = action.payload;
    },
    sortAscending: (state) => {
      state.products.sort((a, b) =>
        a.title > b.title ? 1 : b.title > a.title ? -1 : 0
      );
    },
    sortDescending: (state) => {
      state.products.sort((a, b) =>
        b.title > a.title ? 1 : a.title > b.title ? -1 : 0
      );
    },
    sortByPriceAscending: (state) => {
      state.products = state.products.sort((r1, r2) =>
        r1.price > r2.price ? 1 : r1.price < r2.price ? -1 : 0
      );
    },
    sortByPriceDescending: (state) => {
      state.products = state.products.sort((r1, r2) =>
        r1.price < r2.price ? 1 : r1.price > r2.price ? -1 : 0
      );
    },
    sortByCategory: (state, action) => {
      state.filteredProduct = state.products.filter(
        (item) => item.category === action.payload
      );

      // if(action.payload==="all"){
      // state.products=
    },
  },
});

export const productSliceActions = productSlice.actions;
const productReducer = productSlice.reducer;
export default productReducer;
