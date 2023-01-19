import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "@mui/material";
import { NavLink } from "react-router-dom";

import BrandImg01 from "../../assets/brandproducts/img11.webp";
import BrandImg02 from "../../assets/brandproducts/img22.jpg";
import BrandImg03 from "../../assets/brandproducts/img33.webp";
import BrandImg04 from "../../assets/brandproducts/img44.webp";
import BrandImg05 from "../../assets/brandproducts/img55.jpg";
import BrandImg06 from "../../assets/brandproducts/img66.webp";
import BrandImg07 from "../../assets/brandproducts/img77.jpg";

const PopularBrands = () => {
  return (
    <Box className="popularbrands" textAlign="center" sx={{ ml: 20, mt: 10, mb: 10 }}>
      <Typography
        align="left"
        color="black"
        variant="body1"
        sx={{ fontWeight: "bold", fontSize: 25, m: 1 }}
      >
        Explore Popular Brands
      </Typography>
      <Typography align="left" sx={{ m: 1 }}>
        <Link
          key="products"
          component={NavLink}
          to="#"
          color="black"
          underline="none"
          variant="button"
        >
          <ArrowForwardIosIcon /> See All
        </Link>
      </Typography>
      <Stack direction="row" spacing={3}>
        <Typography>
          <Avatar
            alt="Remy Sharp"
            src={BrandImg01}
            sx={{ width: 150, height: 150 }}
            color="black"
          />
          {"Samsung"}
        </Typography>
        <Typography>
          <Avatar
            alt="Remy Sharp"
            src={BrandImg02}
            sx={{ width: 150, height: 150 }}
          />
          {"Apple"}
        </Typography>

        <Typography>
          <Avatar
            alt="Remy Sharp"
            src={BrandImg03}
            sx={{ width: 150, height: 150 }}
          />
          {"Sony"}
        </Typography>

        <Typography>
          <Avatar
            alt="Remy Sharp"
            src={BrandImg04}
            sx={{ width: 150, height: 150 }}
          />
          {"Nike"}
        </Typography>

        <Typography>
          <Avatar
            alt="Remy Sharp"
            src={BrandImg05}
            sx={{ width: 150, height: 150 }}
          />
          {"Addidas"}
        </Typography>
        <Typography>
          <Avatar
            alt="Remy Sharp"
            src={BrandImg06}
            sx={{ width: 150, height: 150 }}
          />
          {"Loreal"}
        </Typography>
        <Typography>
          <Avatar
            alt="Remy Sharp"
            src={BrandImg07}
            sx={{ width: 150, height: 150 }}
          />
          {"Zara"}
        </Typography>
      </Stack>
    </Box>
  );
};

export default PopularBrands;
