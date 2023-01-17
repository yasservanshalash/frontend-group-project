import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../../redux/store";
import getProductDetailData from "../../redux/thunk/productDetail";
import { productDetailSliceActions } from "../../redux/slices/productDetailSlice";
import { ProductType } from "../../types/types";
import { getProductData } from "../../redux/thunk/products";

const ProductDetails = () => {
  const [item, setItem] = useState<ProductType[]>([])
  const { id } = useParams();
  const products = useSelector((state: RootState) => state.productList.products);
  console.log(products, 'products');
  const product: ProductType[] = products.filter((item: ProductType) => item.id === Number(id));
  console.log(product);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => { 
    dispatch(getProductData())
    setItem(product);

  }, [products]);

  return (
    <div>
      {
        item.length === 0 ? <h1>Loading</h1> : <div className='itemDetail'>
        <img src={item[0]?.image} alt={item[0]?.title} className="productImgDetail"/>
        <div className='productInfo'>
        <h1>{item[0]?.title}</h1>
        <p>{item[0]?.category}</p>
        <p>{item[0]?.description}</p>
        <p>${item[0]?.price}</p>
        </div>
    </div>
      }    </div>
  );
};

export default ProductDetails;
