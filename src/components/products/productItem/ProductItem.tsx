import React from "react";

import { ProductType } from "../../../types/types";

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
      <button>Add to Cart</button>
      <button>More detail</button>
    </div>
  );
};

export default ProductItem;
