import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../../redux/store";
import { ProductType } from "../../../types/types";
import WishListItem from "../wishListItem/WishListItem";

const WishListPage = () => {
  const wishList = useSelector(
    (state: RootState) => state.favoriteList.favorite
  );
  console.log(wishList, "wishes");
  return (
    <div>
      {wishList.map((item: ProductType) => (
        <WishListItem item={item} />
      ))}
    </div>
  );
};

export default WishListPage;
