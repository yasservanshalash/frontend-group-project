import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Icon from "@mui/material/Icon";
import Box from "@mui/material/Box";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DoDisturbOnIcon from "@mui/icons-material/DoDisturbOn";
import Typography from "@mui/material/Typography";

import { useDispatch } from "react-redux";
import { ProductType } from "../../../types/types";
import { cartSliceActions } from "../../../redux/slices/cartSlice";

type Prop = {
  item: ProductType;
};
const CartItem = ({ item }: Prop) => {
  const dispatch = useDispatch();

  const removeFromCartHandler = () => {
    dispatch(cartSliceActions.removeCartItem(item));
  };
  const incrementQuantityHandler = () => {
    dispatch(cartSliceActions.incrementQuantity(item));
  };
  const decrementQuantityHandler = () => {
    dispatch(cartSliceActions.decrementQuantity(item));
  };

  return (
    <div>
      <p>ID:{item.id}</p>
      <p>Name:{item.title}</p>
      <p>Price:{item.price}</p>
      <img src={item.image} alt="product" height="100px" width="70px"></img>
      <DoDisturbOnIcon onClick={decrementQuantityHandler}>-</DoDisturbOnIcon>
      <Box sx={{ display: "inline" }}>{item.quantity}</Box>
      <AddCircleIcon onClick={incrementQuantityHandler}>+</AddCircleIcon>
      <DeleteIcon onClick={removeFromCartHandler} sx={{ ml: 1 }}>
        Remove
      </DeleteIcon>
    </div>
  );
};

export default CartItem;
