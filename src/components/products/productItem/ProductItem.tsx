import React from "react";
import { useDispatch } from "react-redux";
import WishListIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Rating from "@mui/material/Rating";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { green } from "@mui/material/colors";

import { cartSliceActions } from "../../../redux/slices/cartSlice";
import { ProductType } from "../../../types/types";
import { Link } from "react-router-dom";
import { favoriteSliceActions } from "../../../redux/slices/favoriteSlice";
import CartItem from "../../cart/cartItem/CartItem";

type Prop = {
  product: ProductType;
};
const ProductItem = ({ product }: Prop) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartSliceActions.addTocart(product));
  };

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
      <Rating name="customized-10" defaultValue={2} max={5} />
      <br />
      <Link to="/wishlist">
        <WishListIcon onClick={addToWishListHandler} sx={{ color: green[700] }}>
          Add to WishList
        </WishListIcon>
      </Link>
      <Link to="/cartlist">
        <ShoppingCartIcon onClick={addToCartHandler} sx={{ color: green[700] }}>
          Add to Cart
        </ShoppingCartIcon>
      </Link>
      <Link to={`/products/${product.id}`}>
        <ArrowForwardIosIcon sx={{ color: green[700] }}>
          More detail
        </ArrowForwardIosIcon>
      </Link>
    </div>
  );
};

export default ProductItem;
