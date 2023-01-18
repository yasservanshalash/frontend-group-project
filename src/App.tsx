import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import ProductList from "./components/products/productList/ProductList";
import ProductDetails from "./pages/productDetails/ProductDetails";
import WishList from "./pages/wishlist/WishList";
import NavBar from "./components/navbar/NavBar";
import Cart from "./pages/cart/Cart";
import NavBar2 from "./components/navbar2/NavBar2";

import { createTheme, ThemeProvider } from "@mui/material";

function App() {
  const [userInput, setUserInput] = useState<string>("");
  const [clicked, setClicked] = useState<boolean>(false); //theme

  const toggletheme = createTheme({
    palette: {
      mode: clicked ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={toggletheme}>
    <div className="App">
      {/* <NavBar /> */}
      <NavBar2 setUserInput={setUserInput} clicked={clicked} setClicked={setClicked}/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products userInput={userInput}/>}></Route>
        <Route path="/products/:id" element={<ProductDetails />}></Route>
        <Route path="/wishlist" element={<WishList />}></Route>
        <Route path="/cartlist" element={<Cart />}></Route>
      </Routes>

    </div>
    </ThemeProvider>
  );
}

export default App;
