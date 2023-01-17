import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages/home/Home";
import ProductDetails from "./pages/productDetails/ProductDetails";
import Products from "./pages/products/Products";
import ProductList from "./components/products/productList/ProductList";
import ProductDetails from "./pages/productDetails/ProductDetails";import Products from "./pages/products/Products";
import WishList from "./pages/wishlist/WishList";
import NavBar from "./components/navbar/NavBar";
import Products from "./pages/products/Products";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:id" element={<ProductDetails />}></Route>
        <Route path="/wishlist" element={<WishList />}></Route>
        <Route path="/cartlist" element={<Cart />}></Route>
      </Routes>

    </div>
  );
}

export default App;
