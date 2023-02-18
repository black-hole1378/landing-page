import React from "react";
import { RemoveIcon, AddIcon, ShoppingCartIcon } from "./index";
import {
  Grid,
  IconButton,
  styled,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useState } from "react";

const ContainerWrapper = styled(Box)`
  border-radius: 5px;
  background-color: hsl(223, 64%, 98%);
  display: flex;
  align-items: center;
  padding: 5px;
  justify-content: space-between;
`;

export const ProductContainer = () => {
  const [quantity, setQuantity] = useState(0);

  return (
    <Grid
      container
      rowSpacing={{ xs: 1 }}
      pl={{ xs: 4 }}
      pb={{ xs: 2 }}
      pr={{ xs: 4 }}
      columnSpacing={{ md: 2 }}
    >
      <Grid item md={4} xs={12}>
        <ContainerWrapper>
          <IconButton color="warning">
            <RemoveIcon fontSize="medium" />
          </IconButton>
          <Typography color="text.primary">{quantity}</Typography>
          <IconButton color="warning">
            <AddIcon fontSize="medium" />
          </IconButton>
        </ContainerWrapper>
      </Grid>
      <Grid item md={8} xs={12}>
        <Button
          sx={{ width: "100%", fontWeight: "300" }}
          color="warning"
          variant="contained"
        >
          <ShoppingCartIcon fontSize="medium" /> &nbsp; Add To Cart
        </Button>
      </Grid>
    </Grid>
  );
};
