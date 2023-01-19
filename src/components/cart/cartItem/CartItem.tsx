import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import "./CartItem.css";
import { ProductType } from "../../../types/types";
import { cartSliceActions } from "../../../redux/slices/cartSlice";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import Button from "@mui/material/Button";

import Stack from "@mui/material/Stack";
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
    <div className="cart-container">
      <div className="cart-details">
        <img
          src={item.image}
          alt="product"
          height="40px"
          width="30px"
          className="cart-image"
        ></img>
        <p>{item.title}</p>

        <p>
          <strong>${item.price}</strong>
        </p>
      </div>

      <div className="cart-button">
        <div className="button-quantity">
          <RemoveCircleIcon onClick={decrementQuantityHandler} />

          <p>{item.quantity}</p>
          <AddCircleIcon onClick={incrementQuantityHandler} />
        </div>
        <div>
          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              startIcon={<DeleteIcon />}
              onClick={removeFromCartHandler}
              color="error"
            >
              Delete
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
