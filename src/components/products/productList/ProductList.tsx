import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../../../redux/store";
import { getProductData } from "../../../redux/thunk/products";
import ProductItem from "../productItem/ProductItem";

const ProductList = () => {
  const productList = useSelector(
    (state: RootState) => state.productList.products
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getProductData());
  }, [dispatch]);
  console.log(productList, "products");
  return (
    <div>
      {productList.map((product) => (
        <ProductItem key={crypto.randomUUID()} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
