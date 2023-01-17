import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../../redux/store";
import getProductDetailData from "../../redux/thunk/productDetail";
import { productDetailSliceActions } from "../../redux/slices/productDetailSlice";
import { ProductType } from "../../types/types";

const ProductDetails = () => {
  const proDetail = useSelector(
    (state: RootState) => state.productDetails.productDetails
  );
  const { id } = useParams();
  const product = useSelector((state: RootState) => state.productList.products);
  const detail = product.filter((item) => item.id === Number(id));
  console.log(detail, "detail");
  console.log(detail[0].title);
  console.log(typeof id, "id type");
  const dispatch = useDispatch<AppDispatch>();

  const url = `https://fakestoreapi.com/products/${id} `;
  console.log(url, "my url");
  console.log(proDetail, "proooo");
  useEffect(() => {
    dispatch(getProductDetailData(url));
  }, [dispatch, url]);
  return (
    <div>
      <p>
        Name:
        {detail.map((item: ProductType) => (
          <p>ID:{item?.id}</p>
        ))}
      </p>
    </div>
  );
};

export default ProductDetails;
