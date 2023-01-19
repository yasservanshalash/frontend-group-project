import { useSelector } from "react-redux";

import { RootState } from "../../../redux/store";
import { ProductType } from "../../../types/types";
import WishListItem from "../wishListItem/WishListItem";

const WishListPage = () => {
  // STATE
  const wishList = useSelector(
    (state: RootState) => state.favoriteList.favorite
  );
  // RENDER
  return (
    <div>
      {wishList.map((item: ProductType) => (
        <WishListItem item={item} />
      ))}
    </div>
  );
};

export default WishListPage;
