import React from "react";
import { useDispatch } from "react-redux";

import { cartSliceActions } from "../../../redux/slices/cartSlice";
import { ProductType } from "../../../types/types";
import { Link } from "react-router-dom";
import { favoriteSliceActions } from "../../../redux/slices/favoriteSlice";

type Prop = {
  product: ProductType;
};
const ProductItem = ({ product }: Prop) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartSliceActions.addTocart(product));
  };
<<<<<<< HEAD

=======
>>>>>>> 376042a9ca4e74bf88af0ead8aa93fc2c6b940ee
  const addToWishListHandler = () => {
    dispatch(favoriteSliceActions.addFavorite(product));
  };
  return (
    <div>
      <p>ID: {product.id}</p>
      <p>Name: {product.title}</p>
      <p>Category:{product.category}</p>
      <p>Price:{product.price}</p>
      <img src={product.image} alt="product" height="40px" width="50px" />
      <p>Quantity:{product.quantity}</p>
      <p>Rating:{product.rating.rate}</p>
      <Link to="/cartlist">
        <button onClick={addToCartHandler}>Add to Cart</button>
      </Link>
<<<<<<< HEAD
      <button onClick={addToWishListHandler}>Add to wishList</button>
=======
      <Link to={`/products/${product.id}`}>
        <button>More detail</button>
      </Link>
      <button onClick={addToWishListHandler}>Add to WishList</button>
>>>>>>> 376042a9ca4e74bf88af0ead8aa93fc2c6b940ee
    </div>
  );
};

export default ProductItem;
