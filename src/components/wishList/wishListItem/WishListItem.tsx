import { useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import "./WishListItem.css";

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
      <h3>{item.title.slice(0, 20)}</h3>

      <p className="price">$:{item.price}</p>
      <p className="category">{item.category}</p>
      <div className="image">
        <img src={item.image} alt="favProduct" height="80px" width="70px" />
      </div>
      <div>
        <button onClick={removeWishListItem} className="remove">
          Remove
        </button>
      </div>
    </div>
  );
};

export default WishListItem;
