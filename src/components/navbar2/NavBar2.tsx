import { AppBar, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import SearchBar from "../search/SearchBar";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import InventoryIcon from "@mui/icons-material/Inventory";
import Badge from "@mui/material/Badge";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./NavBar2.css";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { productSliceActions } from "../../redux/slices/productSlice";
// MUI SWITCH
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

const NavBar2 = ({
  setUserInput,
  clicked,
  setClicked,
}: {
  setUserInput: Function;
  clicked: boolean;
  setClicked: Function;
}) => {
  // STATE
  const wishList = useSelector(
    (state: RootState) => state.favoriteList.favorite
  );
  const cartList = useSelector((state: RootState) => state.cartList.cartList);
  // DISPATCH

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // SORTING HANDLER
  const sortByCategoryHandler = (category: string) => {
    dispatch(productSliceActions.sortByCategory(category));
    navigate("/products")

  };

  // RENDER
  return (
    <div>
      <AppBar sx={{ position: "static" }} color="inherit">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Link to="/">
              <h3>eShop</h3>
            </Link>
          </Box>
          <SearchBar setUserInput={setUserInput} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "30px",
            }}
          >
            <IconButton component={Link} to="/" color="inherit">
              <HomeIcon />
            </IconButton>

            <IconButton component={Link} to="/products" color="inherit">
              <InventoryIcon />
            </IconButton>
            <IconButton component={Link} to="/wishlist" color="inherit">
              <Badge badgeContent={wishList.length} color="error">
                <FavoriteIcon />
              </Badge>
            </IconButton>
            <IconButton component={Link} to="/cartlist" color="inherit">
              <Badge badgeContent={cartList.length} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <MaterialUISwitch
              sx={{ m: 1 }}
              defaultChecked
              onClick={() => setClicked(!clicked)}
            />
          </Box>
        </Toolbar>
        <Toolbar
          sx={{ display: "flex", justifyContent: "space-between", mx: 20 }}
        >
          <p onClick={() => sortByCategoryHandler("all")}>All Categories</p>
          <p onClick={() => sortByCategoryHandler("electronics")}>Electronics</p>
          <p onClick={() => sortByCategoryHandler("jewelery")}>Jewelery</p>
          <p onClick={() => sortByCategoryHandler("men's clothing")}>Men's</p>
          <p onClick={() => sortByCategoryHandler("women's clothing")}>Women's</p>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar2;
