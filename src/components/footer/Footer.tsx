import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import CallIcon from "@mui/icons-material/Call";

import "./Footer.css";

const Footer = () => {
  return (
    <AppBar position="static" className="footer-appbar">
      <Container maxWidth="xl" className="footer-container">
        <Toolbar disableGutters>
          <Box sx={{ my: 4, mx: 4 }} className="footer-box">
            <Grid container>
              <Grid item xs>
                <Typography
                  align="left"
                  gutterBottom
                  variant="h6"
                  component="div"
                  color="#767676 !important;"
                  sx={{ fontWeight: "bold" }}
                >
                  Buy
                </Typography>
              </Grid>
            </Grid>
            <Typography
              align="left"
              color="#767676 !important;"
              variant="body2"
              sx={{ m: 1 }}
            >
              Registration
            </Typography>
            <Typography
              align="left"
              color="#767676 !important;"
              variant="body2"
              sx={{ m: 1 }}
            >
              eBay Money Back Guarantee
            </Typography>
            <Typography
              align="left"
              color="#767676 !important;"
              variant="body2"
              sx={{ m: 1 }}
            >
              Bidding & buying help
            </Typography>
            <Typography
              align="left"
              color="#767676 !important;"
              variant="body2"
              sx={{ m: 1 }}
            >
              Stores
            </Typography>
            <Typography
              align="left"
              color="#767676 !important;"
              variant="body2"
              sx={{ m: 1 }}
            >
              Deliverying
            </Typography>
          </Box>

          <Box sx={{ my: 4, mx: 4 }} className="footer-box">
            <Grid container>
              <Grid item xs>
                <Typography
                  align="left"
                  gutterBottom
                  variant="h6"
                  component="div"
                  color="#767676 !important;"
                  sx={{ fontWeight: "bold" }}
                >
                  Sell
                </Typography>
              </Grid>
            </Grid>
            <Typography
              align="left"
              color="#767676 !important;"
              variant="body2"
              sx={{ m: 1 }}
            >
              Start selling
            </Typography>
            <Typography
              align="left"
              color="#767676 !important;"
              variant="body2"
              sx={{ m: 1 }}
            >
              Learn to sell
            </Typography>
            <Typography
              align="left"
              color="#767676 !important;"
              variant="body2"
              sx={{ m: 1 }}
            >
              Affiliates
            </Typography>

            <Typography
              align="left"
              color="#767676 !important;"
              variant="body2"
              sx={{ m: 1 }}
            >
              Developers
            </Typography>
            <Typography
              align="left"
              color="#767676 !important;"
              variant="body2"
              sx={{ m: 1 }}
            >
              Security center
            </Typography>
          </Box>

          <Box sx={{ my: 4, mx: 4 }} className="footer-box">
            <Grid container>
              <Grid item xs>
                <Typography
                  align="left"
                  gutterBottom
                  variant="h6"
                  component="div"
                  color="#767676 !important;"
                  sx={{ fontWeight: "bold" }}
                >
                  Stay Conncted
                </Typography>
              </Grid>
            </Grid>
            <Typography
              align="left"
              color="#767676 !important;"
              variant="body2"
              sx={{ m: 1 }}
            >
              <FacebookIcon /> Facebook
            </Typography>
            <Typography
              align="left"
              color="#767676 !important;"
              variant="body2"
              sx={{ m: 1 }}
            >
              <InstagramIcon /> Instagram
            </Typography>
            <Typography
              align="left"
              color="#767676 !important;"
              variant="body2"
              sx={{ m: 1 }}
            >
              <LinkedInIcon /> LinkedIn
            </Typography>

            <Typography
              align="left"
              color="#767676 !important;"
              variant="body2"
              sx={{ m: 1 }}
            >
              <TwitterIcon /> Twitter
            </Typography>
          </Box>

          <Box sx={{ my: 4, mx: 4 }} className="footer-box">
            <Grid container>
              <Grid item xs>
                <Typography
                  align="left"
                  gutterBottom
                  variant="h6"
                  component="div"
                  color="#767676 !important;"
                  sx={{ fontWeight: "bold" }}
                >
                  About eShop
                </Typography>
              </Grid>
            </Grid>
            <Typography
              align="left"
              color="#767676 !important;"
              variant="body2"
              sx={{ m: 1 }}
            >
              Company info
            </Typography>
            <Typography
              align="left"
              color="#767676 !important;"
              variant="body2"
              sx={{ m: 1 }}
            >
              News
            </Typography>
            <Typography
              align="left"
              color="#767676 !important;"
              variant="body2"
              sx={{ m: 1 }}
            >
              Investors
            </Typography>
            <Typography
              align="left"
              color="#767676 !important;"
              variant="body2"
              sx={{ m: 1 }}
            >
              Careers
            </Typography>
            <Typography
              align="left"
              color="#767676 !important;"
              variant="body2"
              sx={{ m: 1 }}
            >
              Advertise and Policies
            </Typography>
            <Typography
              align="left"
              color="#767676 !important;"
              variant="body2"
              sx={{ m: 1 }}
            >
              Owner ship rights program
            </Typography>
          </Box>

          <Box sx={{ my: 4, mx: 4 }} className="footer-box">
            <Grid container>
              <Grid item xs>
                <Typography
                  align="left"
                  gutterBottom
                  variant="h6"
                  component="div"
                  color="#767676 !important;"
                  sx={{ fontWeight: "bold" }}
                >
                  Help & Contact
                </Typography>
              </Grid>
            </Grid>
            <Typography
              align="left"
              color="#767676 !important;"
              variant="body2"
              sx={{ m: 1 }}
            >
              Contact us
            </Typography>
            <Typography
              align="left"
              color="#767676 !important;"
              variant="body2"
              sx={{ m: 1 }}
            ></Typography>
            <Typography
              align="left"
              color="#767676 !important;"
              variant="body2"
              sx={{ m: 1 }}
            >
              <CallIcon /> +46-1234 56 789
            </Typography>
            <Typography
              align="left"
              color="#767676 !important;"
              variant="body2"
              sx={{ m: 1 }}
            >
              info@eShop.com
            </Typography>
            <Typography
              align="left"
              color="#767676 !important;"
              variant="body2"
              sx={{ m: 1 }}
            >
              eShopOwner@eshop.com
            </Typography>
            <Typography
              align="left"
              color="#767676 !important;"
              variant="body2"
              sx={{ m: 1 }}
            >
              P.O. BOX 007 Integrifty, Finland
            </Typography>
          </Box>

          <Box sx={{ my: 6, mx: 6 }} className="footer-box">
            <Typography
              color="#767676 !important;"
              variant="body2"
              sx={{ m: 1 }}
            >
              &copy; 2023 eShop.com. All rights reserved.
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
