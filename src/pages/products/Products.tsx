import React from "react";
import ProductList from "../../components/products/productList/ProductList";

const Products = ({userInput} : {userInput: string}) => {
  return <ProductList userInput={userInput}/>;
};

export default Products;
