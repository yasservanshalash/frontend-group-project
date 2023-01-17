import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../../redux/store";
import getProductDetailData from "../../redux/thunk/productDetail";
import { productDetailSliceActions } from "../../redux/slices/productDetailSlice";

const ProductDetails = () => {
  const proDetail = useSelector(
    (state: RootState) => state.productDetails.productDetails
  );
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();
  const url = `https://fakestoreapi.com/products/${id} `;
  console.log(url, "my url");
  console.log(proDetail, "proooo");
  useEffect(() => {
    dispatch(getProductDetailData(url));
  }, [dispatch, url]);
  return (
    <div>
      <p>Name:{proDetail[0].title}</p>
    </div>
  );
};

export default ProductDetails;
