import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../../redux/store";
import getProductDetailData from "../../redux/thunk/productDetail";
import { productDetailSliceActions } from "../../redux/slices/productDetailSlice";
import { ProductType } from "../../types/types";
import { getProductData } from "../../redux/thunk/products";
import { productSliceActions } from "../../redux/slices/producttSlice";

const url = "https://fakestoreapi.com/products/"
const ProductDetails = () => {
  const { id } = useParams();
  const product: ProductType = useSelector((state: RootState) => state.productDetails.productDetails);
  console.log(product, "product");
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => { 
    dispatch(getProductDetailData(url + id))
  }, [dispatch]);

  return (
    <div>
      {
        !product ? <h1>Loading</h1> : <div className='itemDetail'>
        <img src={product?.image} alt={product?.title} className="productImgDetail"/>
        <div className='productInfo'>
        <h1>{product?.title}</h1>
        <p>{product?.category}</p>
        <p>{product?.description}</p>
        <p>{product?.price}</p>
        </div>
    </div>
      }    
      </div>
  );
};

export default ProductDetails;
