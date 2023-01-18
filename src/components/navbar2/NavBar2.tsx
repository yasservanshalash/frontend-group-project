import * as React from 'react';
import { AppBar, Toolbar } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react';

import SearchBar from '../search/SearchBar';
import { Link } from 'react-router-dom';

const NavBar2 = ({setUserInput} : {setUserInput: Function}) => {
  return (
    <div>
      <AppBar sx={{ position: "static"}}>
        <Toolbar sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <Box>
            <h3>eShop</h3>
          </Box>
          <SearchBar setUserInput={setUserInput}/>
          <Box sx={{display: "flex", justifyContent: "space-between", gap: "30px"}}>
            <Link to="/"><p>Home</p></Link>
            <Link to="/products"><p>Products</p></Link>
            <Link to="/wishlist"><p>WishList</p></Link>
            <Link to="/cartlist"><p>Cart</p></Link>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar2



// const NavBar2 = () => {
//   return (
//     <Paper
//       component="form"
//       sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
//     >
//       <IconButton sx={{ p: '10px' }} aria-label="menu">
//         <MenuIcon />
//       </IconButton>
//       <InputBase
//         sx={{ ml: 1, flex: 1 }}
//         placeholder="Search Google Maps"
//         inputProps={{ 'aria-label': 'search google maps' }}
//       />
//       <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
//         <SearchIcon />
//       </IconButton>
//       <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
//       <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
//         <DirectionsIcon />
//       </IconButton>
//     </Paper>
//   );
// }
// export default NavBar2