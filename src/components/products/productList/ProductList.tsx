import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import "./ProductList.css";
import { AppDispatch, RootState } from "../../../redux/store";
import ProductItem from "../productItem/ProductItem";
import { ProductType } from "../../../types/types";
import { productSliceActions } from "../../../redux/slices/productSlice";
import { getProductData } from "../../../redux/thunk/products";

const ProductList = ({ userInput }: { userInput: string }) => {
  // STATE
  const productList = useSelector(
    (state: RootState) => state.productList.products
  );
  const filteredList = useSelector(
    (state: RootState) => state.productList.filteredProduct
  );
  // HANDLER
  const dispatch = useDispatch<AppDispatch>();

  // SORTING HANDLER

  const sortAscendingHandler = () => {
    dispatch(productSliceActions.sortAscending());
  };
  const sortDescendingHandler = () => {
    dispatch(productSliceActions.sortDescending());
  };
  const sortPriceAscendingHandler = () => {
    dispatch(productSliceActions.sortByPriceAscending());
  };
  const sortPriceDescendingHandler = () => {
    dispatch(productSliceActions.sortByPriceDescending());
  };

  const sortByCategoryHandler = (category: string) => {
    dispatch(productSliceActions.sortByCategory(category));
  };
  // USE EFFECT
  useEffect(() => {
    dispatch(getProductData());
  }, [dispatch]);
  // RENDER
  return (
    <div>
      <div>
        <button onClick={sortAscendingHandler}>Ascending</button>
        <button onClick={sortDescendingHandler}>Descending</button>
        <button onClick={sortPriceAscendingHandler}>PriceAscending</button>
        <button onClick={sortPriceDescendingHandler}>PriceDescending</button>
        <button onClick={() => sortByCategoryHandler("all")}>All</button>
        <button onClick={() => sortByCategoryHandler("electronics")}>
          SortByCategory
        </button>
        <button onClick={() => sortByCategoryHandler("jewelery")}>
          SortByCategory
        </button>
        <button onClick={() => sortByCategoryHandler("men's clothing")}>
          SortByCategory
        </button>
        <button onClick={() => sortByCategoryHandler("women's clothing")}>
          SortByCategory
        </button>
      </div>
      <div className="productList">
        {productList.length === 0 ? (
          <Box className="loader">
            <CircularProgress />
          </Box>
        ) : (
          filteredList
            .filter((product: ProductType) =>
              product.title.toLowerCase().includes(userInput.toLowerCase())
            )
            .map((product: ProductType) => (
              <ProductItem key={product.id} product={product} />
            ))
        )}
      </div>
    </div>
  );
};

export default ProductList;
