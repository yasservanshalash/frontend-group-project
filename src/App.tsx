import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";

import "./App.css";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import ProductDetails from "./pages/productDetails/ProductDetails";
import WishList from "./pages/wishlist/WishList";
import Cart from "./pages/cart/Cart";
import NavBar2 from "./components/navbar2/NavBar2";
import Footer from "./components/footer/Footer";

const App = () => {
  // STATE
  const [userInput, setUserInput] = useState<string>("");
  const [clicked, setClicked] = useState<boolean>(false); //theme
  // THEME
  const toggletheme = createTheme({
    palette: {
      mode: clicked ? "dark" : "light",
    },
  });
  // RENDER
  return (
    <ThemeProvider theme={toggletheme}>
      <div className="App">
        <NavBar2
          setUserInput={setUserInput}
          clicked={clicked}
          setClicked={setClicked}
        />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/products"
            element={<Products userInput={userInput} />}
          ></Route>
          <Route path="/products/:id" element={<ProductDetails />}></Route>
          <Route path="/wishlist" element={<WishList />}></Route>
          <Route path="/cartlist" element={<Cart />}></Route>
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
};
export default App;
