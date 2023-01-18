import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

type PropType = {
    setUserInput: Function;
}

const SearchBar = ({setUserInput}: PropType) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const navigate = useNavigate();
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const searchHandler = (e: React.MouseEvent<HTMLElement>) => {
    setUserInput(searchTerm)
    navigate("/products")
  };

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter") {
        e.preventDefault();
        setUserInput(searchTerm)
        navigate("/products")
    }
  }
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Products..."
        inputProps={{ "aria-label": "Search Products..." }}
        onChange={changeHandler}
        onKeyPress={onEnter}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

      <IconButton
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={searchHandler}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
