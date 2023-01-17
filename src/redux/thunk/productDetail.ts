// import { productDetailSliceActions } from "./../slices/productDetailSlice";
// import { AppDispatch } from "../store";

// export const fetchProductDetail = (url: string) => {
//   return async (dispatch: AppDispatch) => {
//     const response = await fetch(url);
//     const data = await response.json();
//     // const result = data.forEach((item: ProductType) => (item.quantity = 1));
//     dispatch(productDetailSliceActions.getProductDetail(data));
//   };
// };

import { AppDispatch } from "../store";
import { productDetailSliceActions } from "../slices/productDetailSlice";

const getProductDetailData = (url: string) => {
  return async (dispatch: AppDispatch) => {
    const response = await fetch(url);
    const data = await response.json();
    dispatch(productDetailSliceActions.getProductDetail(data));
  };
};

export default getProductDetailData;
