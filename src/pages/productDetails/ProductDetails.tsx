import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../../redux/store";
import getProductDetailData from "../../redux/thunk/productDetail";
import { ProductType } from "../../types/types";

import "./ProductDetails.css"
// URL
const url = "https://fakestoreapi.com/products/";

const ProductDetails = () => {
  // STATE
  const product: ProductType = useSelector(
    (state: RootState) => state.productDetails.productDetails
  );
  // DISPATCH
  const dispatch = useDispatch<AppDispatch>();
  // USE PARAMS
  const { id } = useParams();
  // SIDE EFFECT
  useEffect(() => {
    dispatch(getProductDetailData(url + id));
  }, [dispatch]);
  // RENDER
  return (
    <div className="itemDetailPage">
      {!product ? (
        <h1>Loading</h1>
      ) : (
        <div className="itemDetail">
          <img
            src={product.image}
            alt={product.title}
            className="productImgDetail"
          />
          <div className="productInfo">
            <h1>{product.title}</h1>
            <p>{product.category}</p>
            <p>{product.description}</p>
            <p>{product.price === 1 ? "loading" : product.price}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
