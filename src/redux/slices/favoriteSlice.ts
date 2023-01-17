import { ProductType } from "./../../types/types";
import { createSlice } from "@reduxjs/toolkit";

type IntialState = {
  favProductsData: ProductType[];
};

const initialState: IntialState = {
  favProductsData: [],
};
const favProductSlice = createSlice({
  name: "favoriteProducts",
  initialState,
  reducers: {
    getFavoriteProduct: (state, action) => {
      state.favProductsData = action.payload;
    },
  },
});

export const favProductSliceActions = favProductSlice.actions;
const favProductReducer = favProductSlice.reducer;
export default favProductReducer;
