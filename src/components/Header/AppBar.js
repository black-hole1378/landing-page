import React from "react";
import { AppBar, Toolbar, Container } from "@mui/material";
import Link from "next/link";
import Style from "../../../styles/Home.module.css";
import { Box } from "@mui/material";
import ShoppingCart from "./ShoppingCart";

const HeaderContainer = () => {
  return (
    <AppBar
      position="static"
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
          <ShoppingCart />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default HeaderContainer;
