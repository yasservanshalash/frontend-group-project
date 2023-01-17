import React from "react";

import { useDispatch } from "react-redux";
import { ProductType } from "../../../types/types";
import { cartSliceActions } from "../../../redux/slices/cartSlice";

type Prop = {
  item: ProductType;
};
const CartItem = ({ item }: Prop) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(cartSliceActions.removeCartItem(item));
  };
  return (
    <div>
      <p>ID:{item.id}</p>
      <p>Name:{item.title}</p>
      <img src={item.image} alt="product" height="100px" width="70px"></img>
      <button onClick={removeFromCart}>Remove</button>
    </div>
  );
};

export default CartItem;
