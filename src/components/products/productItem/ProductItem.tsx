import React from "react";

import { ProductType } from "../../../types/types";
import { Link } from "react-router-dom";

type Prop = {
  product: ProductType;
};
const ProductItem = ({ product }: Prop) => {
  return (
    <div>
      <p>ID: {product.id}</p>
      <p>Name: {product.title}</p>
      <p>Category:{product.category}</p>
      <p>Price:{product.price}</p>
      <img src={product.image} alt="product" height="40px" width="50px" />
      <p>Quantity:{product.quantity}</p>
      <p>Rating:{product.rating.rate}</p>
      <Link to={`/products/${product.id}`}>
        <button>More detail</button>
      </Link>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
