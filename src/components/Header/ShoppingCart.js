import { Badge, Box, Tooltip } from "@mui/material";
import React from "react";
import Link from "next/link";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Style from "../../../styles/Home.module.css";
import { selectQuantity } from "../../State/Slice/cartSlice";
import { useSelector } from "react-redux";
const ShoppingCart = () => {
  const quantity = useSelector(selectQuantity);
  console.log(quantity);
  return (
    <Box>
      <Tooltip title="Your Cart">
        <Link href="/Cart" className={Style.cartLogo}>
          {quantity > 0 ? (
            <Badge badgeContent={4} color="warning">
              <ShoppingCartIcon fontSize="medium" />
            </Badge>
          ) : (
            <ShoppingCartIcon />
          )}
        </Link>
      </Tooltip>
    </Box>
  );
};

export default ShoppingCart;
