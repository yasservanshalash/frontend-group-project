import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../../redux/store";
import CartItem from "../cartItem/CartItem";

const CartList = () => {
  const cartList = useSelector((state: RootState) => state.cartList.cartList);
  const totalprice = cartList.reduce((accum, item) => accum + item.total, 0);
  return (
    <div>
      <h1>Cart list</h1>
      {cartList.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <button>Total Cart Price:</button>
      <span>{totalprice}</span>
    </div>
  );
};

export default CartList;
