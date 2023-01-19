import { ProductType } from "./../../types/types";
import { createSlice } from "@reduxjs/toolkit";
// TYPE
type IntialState = {
  products: ProductType[];
  filteredProduct: ProductType[];
};
// INITIAL STATE
const initialState: IntialState = {
  products: [],
  filteredProduct: [],
};
// SLICE
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // CASES
    getProductData: (state, action) => {
      state.products = action.payload;
      state.filteredProduct = action.payload;
    },
    sortAscending: (state) => {
      state.filteredProduct.sort((a, b) =>
        a.title > b.title ? 1 : b.title > a.title ? -1 : 0
      );
    },
    sortDescending: (state) => {
      state.filteredProduct.sort((a, b) =>
        b.title > a.title ? 1 : a.title > b.title ? -1 : 0
      );
    },
    sortByPriceAscending: (state) => {
      state.filteredProduct = state.products.sort((r1, r2) =>
        r1.price > r2.price ? 1 : r1.price < r2.price ? -1 : 0
      );
    },
    sortByPriceDescending: (state) => {
      state.filteredProduct = state.products.sort((r1, r2) =>
        r1.price < r2.price ? 1 : r1.price > r2.price ? -1 : 0
      );
    },
    sortByCategory: (state, action) => {
      if(action.payload === 'all') {
        state.filteredProduct = state.products
      } else {
        state.filteredProduct = state.products.filter(
          (item) => item.category === action.payload
        );
      }

    },
  },
});
// ACTIONS
export const productSliceActions = productSlice.actions;
// REDUCER
const productReducer = productSlice.reducer;
export default productReducer;
