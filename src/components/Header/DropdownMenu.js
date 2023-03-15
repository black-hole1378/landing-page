import React from "react";
import { IconButton, Box, Menu, MenuItem, Avatar } from "@mui/material";
import ToggleMenu from "./Menus";
const Dropdown = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <IconButton onClick={handleClick} sx={{ fontSize: "medium" }}>
        Email
      </IconButton>
      <ToggleMenu open={open} handleClose={handleClose} anchorEl={anchorEl} />
    </React.Fragment>
  );
};

export default Dropdown;
