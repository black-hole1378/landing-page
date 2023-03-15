import React from "react";
import { AppBar, Toolbar, Container } from "@mui/material";
import Link from "next/link";
import Style from "../../../styles/Home.module.css";
import { Box } from "@mui/material";
import ShoppingCart from "./ShoppingCart";
import Login from "./Login";
import Dropdown from "./DropdownMenu";

const HeaderContainer = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "hsl(0, 0%, 100%)",
        color: "inherit",
        boxShadow: 1,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/" className={Style.logo}>
            Snap
          </Link>
          <Box flexGrow={1} />
          <Box display={"flex"} alignItems="center" gap={3}>
            <ShoppingCart />
            <Dropdown />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default HeaderContainer;
