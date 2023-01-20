import { useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import "./WishListItem.css";
import Button from "@mui/material/Button";

import { favoriteSliceActions } from "../../../redux/slices/favoriteSlice";
import { ProductType } from "../../../types/types";

// TYPE
type Prop = {
  item: ProductType;
};
const WishListItem = ({ item }: Prop) => {
  // DISPATCH
  const dispatch = useDispatch();
  // REMOVE
  const removeWishListItem = () => {
    dispatch(favoriteSliceActions.removeFavorite(item));
  };
  // RENDER
  return (
    <div className="cartitem-detail">
      <h3>{item.title.slice(0, 20)}</h3>
      <p className="cartitem-paragraph">${item.price}</p>
      <p className="cartitem-paragraph">{item.category}</p>
      <img src={item.image} alt="favProduct" height="80px" width="70px" />
      <Button
        className="remove"
        variant="outlined"
        color="error"
        startIcon={<DeleteIcon />}
        onClick={removeWishListItem}
      >
        Delete
      </Button>
    </div>
  );
};

export default WishListItem;
