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
  const items: ProductType[] =
    localStorage.getItem("favorite") !== null
      ? JSON.parse(localStorage.getItem("favorite")!)
      : [];

  // RENDER
  return (
    <div className="cart-wrap">
      <h1 className="header">Your Cart</h1>
      {items.length > 0
        ? items.map((item) => <CartItem key={item.id} item={item} />)
        : cartList.map((item) => <CartItem key={item.id} item={item} />)}
      <div className="total-button">
        <h1>Total: ${Math.round(totalprice)}</h1>
      </div>
    </div>
  );
};

export default CartList;
