import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "@mui/material";
import { NavLink } from "react-router-dom";

import BrandImg01 from "../../assets/categoryproducts/img11.jpg";
import BrandImg02 from "../../assets/categoryproducts/img22.jpg";
import BrandImg03 from "../../assets/categoryproducts/img33.jpg";
import BrandImg04 from "../../assets/categoryproducts/img44.jpg";
import BrandImg05 from "../../assets/categoryproducts/img55.jpg";
import BrandImg06 from "../../assets/categoryproducts/img66.jpg";
import BrandImg07 from "../../assets/categoryproducts/img77.jpg";

const PopularCategories = () => {
  return (
    <Box textAlign="center" sx={{ ml: 20, mt: 35 }}>
      <Typography
        align="left"
        color="black"
        variant="body1"
        sx={{ fontWeight: "bold", fontSize: 25, m: 1 }}
      >
        Explore Popular Categories
      </Typography>
      <Typography align="left" sx={{ m: 1 }}>
        <Link
          key="products"
          component={NavLink}
          to="/products"
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
          {"Bags"}
        </Typography>
        <Typography>
          <Avatar
            alt="Shirt Cate"
            src={BrandImg02}
            sx={{ width: 150, height: 150 }}
          />
          {"Full Sleeves Shirts"}
        </Typography>

        <Typography>
          <Avatar
            alt="Winter Garments"
            src={BrandImg03}
            sx={{ width: 150, height: 150 }}
          />
          {"Winter Garments"}
        </Typography>

        <Typography>
          <Avatar
            alt="Smart Elec"
            src={BrandImg04}
            sx={{ width: 150, height: 150 }}
          />
          {"Smart Electronics"}
        </Typography>

        <Typography>
          <Avatar
            alt="Samsung"
            src={BrandImg05}
            sx={{ width: 150, height: 150 }}
          />
          {"Samsung Products"}
        </Typography>
        <Typography>
          <Avatar
            alt="Casual"
            src={BrandImg06}
            sx={{ width: 150, height: 150 }}
          />
          {"Casual"}
        </Typography>
        <Typography>
          <Avatar
            alt="Women's Clothes"
            src={BrandImg07}
            sx={{ width: 150, height: 150 }}
          />
          {"Women's Clothes"}
        </Typography>
      </Stack>
    </Box>
  );
};

export default PopularCategories;
