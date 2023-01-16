import { productSliceActions } from "./../slices/producttSlice";
import { ProductType } from "../../types/types";
import { AppDispatch } from "../store";

const url = "https://fakestoreapi.com/products";

const getProductData = () => {
  return async (dispatch: AppDispatch) => {
    const response = await fetch(url);
    const data = await response.json();
    const result = data.forEach((item: ProductType) => (item.quantity = 1));
    dispatch(productSliceActions.getProductData(result));
  };
};
