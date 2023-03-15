import React from "react";
import { Drawer, MenuItem, AppBar, Box } from "@mui/material";
const Sidebar = () => {
  return (
    <Drawer
      containerStyle={{ height: 400 }}
      width={200}
      open={true}
      variant="permanent"
    >
      <AppBar title="AppBar" />
      <MenuItem>Menu Item</MenuItem>
      <MenuItem>Menu Item 2</MenuItem>
    </Drawer>
  );
};

export default Sidebar;
