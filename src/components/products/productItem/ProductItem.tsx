import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { cartSliceActions } from "../../../redux/slices/cartSlice";
import { ProductType } from "../../../types/types";
import { Link } from "react-router-dom";
import { favoriteSliceActions } from "../../../redux/slices/favoriteSlice";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Rating from "@mui/material/Rating";
import { Box } from "@mui/material";
import { RootState } from "../../../redux/store";
import "./ProductItem.css";
type Prop = {
  product: ProductType;
};
const ProductItem = ({ product }: Prop) => {
  const favProducts = useSelector(
    (state: RootState) => state.favoriteList.favorite
  );
  const cartProducts = useSelector(
    (state: RootState) => state.cartList.cartList
  );
  // const [isFavorite, setIsFavorite] = useState(false);
  // const [isInCart, setIsInCart]  = useState(false);
  // console.log(favProducts.includes(product) ? true : false)
  // const [favClicked, setFavClicked] = useState<boolean>(false);
  // console.log(favClicked)
  // const [cartClicked, setCartClicked] = useState<boolean>(false);
  const dispatch = useDispatch();
  let isInCart = cartProducts.some(
    (item: ProductType) => item.title === product.title
  );
  let isFav = favProducts.some(
    (item: ProductType) => item.title === product.title
  );

  // useEffect(() => {
  //   favProducts.some((item: ProductType) => item.title === product.title) ? setIsFavorite(true) : setIsFavorite(false);
  // }, []);
  // console.log(isFavorite)
  const addToCartHandler = () => {
    dispatch(cartSliceActions.addTocart(product));
  };

  const addToWishListHandler = () => {
    dispatch(favoriteSliceActions.addFavorite(product));
  };

  const removeFromCart = () => {
    dispatch(cartSliceActions.removeCartItem(product));
  };

  const removeFromWishList = () => {
    dispatch(favoriteSliceActions.removeFavorite(product));
  };

  const cartBtnHandler = () => {
    if (isInCart) {
      removeFromCart();
      isInCart = !isInCart;
    } else {
      addToCartHandler();
      isInCart = !isInCart;
    }
  };

  const favBtnHandler = () => {
    if (isFav) {
      removeFromWishList();
      isFav = !isFav;
    } else {
      addToWishListHandler();
      isFav = !isFav;
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        mt: 3,
        gap: "20px",
        lineHeight: "1px",
      }}
      className="product"
    >
      <Box>
        <img src={product.image} alt="product" width="120px" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <p>{product.title}</p>
        <Rating
          name="half-rating-read"
          defaultValue={product.rating.rate}
          precision={0.5}
          readOnly
        />
        <p>${product.price}</p>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <IconButton onClick={cartBtnHandler}>
            <ShoppingCartIcon sx={{ color: isInCart ? "blue" : "gray" }} />
          </IconButton>
          <IconButton onClick={favBtnHandler}>
            <FavoriteIcon sx={{ color: isFav ? "red" : "gray" }} />
          </IconButton>
          <IconButton component={Link} to={`/products/${product.id}`}>
            <ArrowForwardIosIcon sx={{ color: "gray" }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductItem;
