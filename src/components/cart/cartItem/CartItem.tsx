import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
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
      <DeleteIcon onClick={removeFromCartHandler}>Remove</DeleteIcon>
      <button onClick={decrementQuantityHandler}>-</button>
      <span>{item.quantity}</span>
      <button onClick={incrementQuantityHandler}>+</button>
    </div>
  );
};

export default CartItem;
