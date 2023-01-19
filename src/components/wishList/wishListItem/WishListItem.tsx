import { useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import "./WishListItem.css";
import Button from "@mui/material/Button";

import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

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
    <div>
      <h3>Name: {item.title.slice(0, 20)}</h3>

      <p className="price">$:{item.price}</p>
      <p className="category">Category:{item.category}</p>
      <div className="image">
        <img src={item.image} alt="favProduct" height="80px" width="70px" />
      </div>
      <div className="remove">
        <Button
          variant="outlined"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={removeWishListItem}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default WishListItem;
