import { ProductType } from "./../../types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const items =
  localStorage.getItem("favorite") !== null
    ? JSON.parse(localStorage.getItem("favorite")!)
    : [];

type IntialState = {
  favorite: ProductType[];
};
const initialState: IntialState = {
  favorite: [],
};
const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<ProductType>) => {
      if (
        state.favorite.find(
          (item: ProductType) => item.title === action.payload.title
        )
      ) {
        return;
      } else {
        state.favorite.push(action.payload);
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
      }
    },
  },
});
export const favoriteSliceActions = favoriteSlice.actions;
const favoriteReducer = favoriteSlice.reducer;
export default favoriteReducer;
