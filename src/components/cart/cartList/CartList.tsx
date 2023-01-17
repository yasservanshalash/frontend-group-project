import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../../redux/store";
import CartItem from "../cartItem/CartItem";

const CartList = () => {
  const cartList = useSelector((state: RootState) => state.cartList.cartList);
  console.log(cartList, "cartList");
  return (
    <div>
      <h1>Cart list</h1>
      {cartList.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CartList;
