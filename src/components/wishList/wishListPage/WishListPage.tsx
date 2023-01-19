import { useSelector } from "react-redux";

import { RootState } from "../../../redux/store";
import { ProductType } from "../../../types/types";
import WishListItem from "../wishListItem/WishListItem";

const WishListPage = () => {
  // STATE
  /* const wishList = useSelector(
    (state: RootState) => state.favoriteList.favorite
  ); */
  const items =
    localStorage.getItem("favorite") !== null
      ? JSON.parse(localStorage.getItem("favorite")!)
      : [];

  // RENDER
  return (
    <div className="container">
      {items.map((item: ProductType) => (
        <WishListItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default WishListPage;
