import { useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";

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
      <p>ID: {item.id}</p>
      <p>Name: {item.title}</p>
      <p>Category:{item.category}</p>
      <p>Price:{item.price}</p>
      <img src={item.image} alt="favProduct" height="40px" width="50px" />
      <DeleteIcon onClick={removeWishListItem}>Remove</DeleteIcon>
    </div>
  );
};

export default WishListItem;
