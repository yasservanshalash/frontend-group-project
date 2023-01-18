import React from "react";
import { useDispatch } from "react-redux";
import { favoriteSliceActions } from "../../../redux/slices/favoriteSlice";

import { ProductType } from "../../../types/types";

type Prop = {
  item: ProductType;
};
const WishListItem = ({ item }: Prop) => {
  const dispatch = useDispatch();
  const removeWishListItem = () => {
    dispatch(favoriteSliceActions.removeFavorite(item));
  };
  return (
    <div>
      <p>ID: {item.id}</p>
      <p>Name: {item.title}</p>
      <p>Category:{item.category}</p>
      <p>Price:{item.price}</p>
      <img src={item.image} alt="favProduct" height="40px" width="50px" />
      <p>Quantity:{item.quantity}</p>
      <p>Rating:{item.rating.rate}</p>
      <button onClick={removeWishListItem}>Remove</button>
    </div>
  );
};

export default WishListItem;
