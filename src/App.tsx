import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import ProductList from "./components/products/productList/ProductList";
import Home from "./pages/home/Home";
import ProductDetails from "./pages/productDetails/ProductDetails";
import Products from "./pages/products/Products";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:id" element={<ProductDetails />}></Route>
      </Routes>
    </div>
  );
}
 
export default App;
