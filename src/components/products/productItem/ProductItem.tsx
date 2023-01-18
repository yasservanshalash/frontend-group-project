import React from "react";
import { useDispatch } from "react-redux";

import { cartSliceActions } from "../../../redux/slices/cartSlice";
import { ProductType } from "../../../types/types";
import { Link } from "react-router-dom";
import { favoriteSliceActions } from "../../../redux/slices/favoriteSlice";
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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
      <p>Rating:{product.rating.rate}</p>
        <IconButton component={Link} to="/cartlist" onClick={addToCartHandler}>
          <ShoppingCartIcon />
        </IconButton>
      <IconButton component={Link} to="/wishlist" onClick={addToWishListHandler}>
          <FavoriteIcon />
        </IconButton>
      <IconButton component={Link} to={`/products/${product.id}`}>
          <ArrowForwardIosIcon />
        </IconButton>
    </div>
  );
};

export default ProductItem;
