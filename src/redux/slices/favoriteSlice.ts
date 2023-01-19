import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ProductType } from "./../../types/types";
// GET ITEM
const items =
  localStorage.getItem("favorite") !== null
    ? JSON.parse(localStorage.getItem("favorite")!)
    : [];
// TYPE
type IntialState = {
  favorite: ProductType[];
};
// INITIALSTATE
const initialState: IntialState = {
  favorite: items,
};
// SLICE
const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    // CASES
    addFavorite: (state, action: PayloadAction<ProductType>) => {
      if (
        state.favorite.find(
          (item: ProductType) => item.title === action.payload.title
        )
      ) {
        return;
      } else {
        state.favorite.push(action.payload);
        // SETITEM
        localStorage.setItem(
          "favorite",
          JSON.stringify(state.favorite.map((item: ProductType) => item))
        );
      }
    },
    removeFavorite: (state, action: PayloadAction<ProductType>) => {
      const index = state.favorite.findIndex(
        (item: ProductType) => item.title === action.payload.title
      );
      if (index === -1) {
        return;
      } else {
        const favItem = state.favorite.filter(
          (item: ProductType) => item.title !== action.payload.title
        );
        localStorage.setItem(
          "favorite",
          JSON.stringify(state.favorite.map((item: ProductType) => item))
        );
        state.favorite = favItem;
      }
    },
  },
});
// ACTIONS
export const favoriteSliceActions = favoriteSlice.actions;
// REDUCER
const favoriteReducer = favoriteSlice.reducer;
export default favoriteReducer;
