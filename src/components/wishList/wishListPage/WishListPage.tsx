import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import WishListItem from "../wishListItem/WishListItem";

const WishListPage = () => {
  const wishList = useSelector(
    (state: RootState) => state.favoriteReducer.favorite
  );
  return (
    <div>
      {wishList.map((item) => (
        <WishListItem item={item} />
      ))}
    </div>
  );
};

export default WishListPage;
