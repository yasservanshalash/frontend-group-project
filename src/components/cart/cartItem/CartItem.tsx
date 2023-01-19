import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";

import { ProductType } from "../../../types/types";
import { cartSliceActions } from "../../../redux/slices/cartSlice";

// TYPE
type Prop = {
  item: ProductType;
};
const CartItem = ({ item }: Prop) => {
  // DISPATCH
  const dispatch = useDispatch();
  // HANDLER
  const removeFromCartHandler = () => {
    dispatch(cartSliceActions.removeCartItem(item));
  };
  const incrementQuantityHandler = () => {
    dispatch(cartSliceActions.incrementQuantity(item));
  };
  const decrementQuantityHandler = () => {
    dispatch(cartSliceActions.decrementQuantity(item));
  };
  // RENDER
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
