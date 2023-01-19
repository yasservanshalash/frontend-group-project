import React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "@mui/material";
import MoreIcon from "@mui/icons-material/MoreVert";
import HomeIcon from "@mui/icons-material/Home";
import ProductIcon from "@mui/icons-material/Inventory";
import WishListIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const NavBar = () => {
  const wishList = useSelector(
    (state: RootState) => state.favoriteList.favorite
  );
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>HIiii</MenuItem>
      <MenuItem onClick={handleMenuClose}>Myyy</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link
        key="home"
        component={NavLink}
        to="/"
        color="black"
        underline="none"
        variant="button"
      >
        <MenuItem onClick={handleMobileMenuClose}>
          <IconButton size="large" aria-label="Home" color="inherit">
            <HomeIcon />
          </IconButton>
          <p>Home</p>
        </MenuItem>
      </Link>

      <Link
        key="products"
        component={NavLink}
        to="/products"
        color="black"
        underline="none"
        variant="button"
      >
        <MenuItem onClick={handleMobileMenuClose}>
          <IconButton size="large" aria-label="Home Page" color="inherit">
            <ProductIcon />
          </IconButton>
          <p>Products</p>
        </MenuItem>
      </Link>

      <Link
        key="wishlist"
        component={NavLink}
        to="/wishlist"
        color="black"
        underline="none"
        variant="button"
      >
        <MenuItem onClick={handleMobileMenuClose}>
          <IconButton size="large" aria-label="Wish List" color="inherit">
            <Badge badgeContent={wishList.length} color="error">
              <WishListIcon />
            </Badge>
          </IconButton>
          <p>Wish List</p>
        </MenuItem>
      </Link>

      <Link
        key="cart"
        component={NavLink}
        to="/cart"
        color="black"
        underline="none"
        variant="button"
      >
        <MenuItem onClick={handleMobileMenuClose}>
          <IconButton size="large" aria-label="Cart" color="inherit">
            <Badge badgeContent={4} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <p>Cart</p>
        </MenuItem>
      </Link>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            eBuy HI-MY
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton size="large" aria-label="Home Page" color="inherit">
              <Link
                component={NavLink}
                to="/"
                color="white"
                underline="none"
                variant="button"
              >
                <HomeIcon />
              </Link>
            </IconButton>
            <IconButton size="large" aria-label="Product List" color="inherit">
              <Link
                component={NavLink}
                to="/products"
                color="white"
                underline="none"
                variant="button"
              >
                <ProductIcon />
              </Link>
            </IconButton>
            <IconButton size="large" aria-label="Wish List" color="inherit">
              <Badge badgeContent={17} color="error">
                <Link
                  component={NavLink}
                  to="/wishlist"
                  color="white"
                  underline="none"
                  variant="button"
                >
                  <WishListIcon />
                </Link>
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="Cart Page"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <Link
                  component={NavLink}
                  to="/cart"
                  color="white"
                  underline="none"
                  variant="button"
                >
                  <ShoppingCartIcon />
                </Link>
              </Badge>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};

export default NavBar;
