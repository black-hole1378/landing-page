import React from "react";
import { Box, Container, Grid, Typography, Divider } from "@mui/material";
import ImageWrapper from "./ImageWrapper";
import ProductController from "./ProductController";
const CartContainer = ({ name, price, image }) => {
  console.log(image);
  return (
    <Container maxWidth="xl">
      <Grid container alignItems={"center"}>
        <Grid item md={3} xs={3}>
          <ImageWrapper image={image} />
        </Grid>
        <Grid item md={3} xs={3}>
          <Typography variant="body1">{name}</Typography>
        </Grid>
        <Grid item md={3} xs={3}>
          <Typography variant="body1">{price}$</Typography>
        </Grid>
        <Grid item md={3} xs={3}>
          <ProductController />
        </Grid>
      </Grid>
      <Divider component="ul" />
    </Container>
  );
};

export default CartContainer;
