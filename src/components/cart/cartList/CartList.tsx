import { useSelector } from "react-redux";

import { RootState } from "../../../redux/store";
import { ProductType } from "../../../types/types";
import CartItem from "../cartItem/CartItem";
import "./CartList.css";

const CartList = () => {
  // STATE
  const cartList = useSelector((state: RootState) => state.cartList.cartList);
  // CART TOTAL
  const totalprice = cartList.reduce(
    (accum, item) => accum + item.quantity * item.price,
    0
  );
  // GET ITEM
  const items =
    localStorage.getItem("cartlist") !== null
      ? JSON.parse(localStorage.getItem("cartlist")!)
      : [];

  // RENDER
  return (
    <div className="cart-wrap">
      <h1 className="header">Your Cart</h1>
      {items.length > 0
        ? items.map((item: ProductType) => (
            <CartItem item={item} key={item.id} />
          ))
        : cartList.map((item: ProductType) => (
            <CartItem item={item} key={item.id} />
          ))}
    </div>
  );
};

export default CartList;
