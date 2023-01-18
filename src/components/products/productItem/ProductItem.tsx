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
import Rating from '@mui/material/Rating';
import {Box} from "@mui/material"
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
    <Box sx={{display: "flex", justifyContent: "flex-start", alignItems: "center", mt: 3}}>
      <Box>
      <img src={product.image} alt="product" width="100px"/>

        </Box>
        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", p: 0}}>
        <p>Name: {product.title}</p>
      <p>Category:{product.category}</p>
      <p>Price:{product.price}</p>
      <Rating name="half-rating-read" defaultValue={product.rating.rate} precision={0.5} readOnly />
      <Box sx={{display: "flex", gap: "10px"}}>
        <IconButton component={Link} to="/cartlist" onClick={addToCartHandler}>
          <ShoppingCartIcon />
        </IconButton>
      <IconButton component={Link} to="/wishlist" onClick={addToWishListHandler}>
          <FavoriteIcon />
        </IconButton>
      <IconButton component={Link} to={`/products/${product.id}`}>
          <ArrowForwardIosIcon />
        </IconButton>
        </Box>
          </Box>

    </Box>
  );
};

export default ProductItem;
