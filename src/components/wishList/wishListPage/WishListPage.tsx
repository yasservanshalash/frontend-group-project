import React from "react";
import { useSelector } from "react-redux";
<<<<<<< HEAD
import { RootState } from "../../../redux/store";
=======

import { RootState } from "../../../redux/store";
import { ProductType } from "../../../types/types";
>>>>>>> 376042a9ca4e74bf88af0ead8aa93fc2c6b940ee
import WishListItem from "../wishListItem/WishListItem";

const WishListPage = () => {
  const wishList = useSelector(
<<<<<<< HEAD
    (state: RootState) => state.favoriteReducer.favorite
  );
  return (
    <div>
      {wishList.map((item) => (
=======
    (state: RootState) => state.favoriteList.favorite
  );
  console.log(wishList, "wishes");
  return (
    <div>
      {wishList.map((item: ProductType) => (
>>>>>>> 376042a9ca4e74bf88af0ead8aa93fc2c6b940ee
        <WishListItem item={item} />
      ))}
    </div>
  );
};

export default WishListPage;
