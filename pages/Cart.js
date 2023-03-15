import React, { useState } from "react";
import ErrorPage from "next/error";
import CartContainer from "../src/components/cart/Cart";
import Style from "../styles/cart.module.css";
import Data from "../src/data.json";
import { Typography, Box, Stack, Paper } from "@mui/material";
import CartFooter from "../src/components/cart/CartFooter";
const Cart = () => {
  const select = true;
  const [data, setData] = useState(Data.carts.products);
  if (data.length == 0)
    return (
      <Paper className={Style.cart_container}>
        <Typography fontWeight={600} textAlign={"center"} variant="h4">
          Noting in Cart
        </Typography>
      </Paper>
    );
  else
    return (
      <Paper className={Style.cart_container}>
        {data.map((product, index) => (
          <Stack spacing={3} key={index}>
            <CartContainer {...product} />
          </Stack>
        ))}
        <CartFooter />
      </Paper>
    );
};

export default Cart;
