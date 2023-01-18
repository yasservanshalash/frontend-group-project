import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../../../redux/store";
import { getProductData } from "../../../redux/thunk/products";
import ProductItem from "../productItem/ProductItem";

import {ProductType} from "../../../types/types"

import "./ProductList.css"
const ProductList = ({userInput} : {userInput: string}) => {
  const productList = useSelector(
    (state: RootState) => state.productList.products
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getProductData());
  }, [dispatch]);
  console.log(productList, "products");
  return (
    <div className="productList">
      {productList.length === 0 ? <h1>Loading...</h1> : productList.filter((product: ProductType) => product.title.toLowerCase().includes(userInput.toLowerCase())).map((product: ProductType) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
