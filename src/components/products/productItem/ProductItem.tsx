import React from "react";

import { ProductType } from "../../../types/types";

type Prop = {
  product: ProductType;
};
const ProductItem = ({ product }: Prop) => {
  return (
    <div>
      <p>Name: {product.title}</p>
      <p>Category:{product.category}</p>
    </div>
  );
};

export default ProductItem;
