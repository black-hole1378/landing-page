import React from "react";
import { RemoveIcon, AddIcon, ShoppingCartIcon } from "./index";
import useQuantity from "../../hooks/useQuantity";
import {
  Grid,
  IconButton,
  styled,
  Typography,
  Button,
  Box,
} from "@mui/material";

const ContainerWrapper = styled(Box)`
  border-radius: 5px;
  background-color: hsl(223, 64%, 98%);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProductContainer = ({ countInStock, saveToCard, id, setOpen }) => {
  const { quantity, Increment, Decrement } = useQuantity(countInStock);

  return (
    <Grid
      container
      rowSpacing={{ xs: 1 }}
      pl={{ xs: 4 }}
      pb={{ xs: 2 }}
      pr={{ xs: 4 }}
      columnSpacing={{ md: 2 }}
      justifyContent="center"
    >
      <Grid item md={5} xs={12}>
        <ContainerWrapper>
          <IconButton
            disabled={quantity == 0}
            color="warning"
            onClick={Decrement}
          >
            <RemoveIcon fontSize="medium" />
          </IconButton>
          <Typography color="text.primary">{quantity}</Typography>
          <IconButton
            disabled={quantity == countInStock}
            color="warning"
            onClick={() => Increment()}
          >
            <AddIcon fontSize="medium" />
          </IconButton>
        </ContainerWrapper>
      </Grid>
      <Grid item md={7} xs={12}>
        <Button
          disabled={countInStock == 0}
          sx={{ width: "100%", fontWeight: "300" }}
          color="warning"
          variant="contained"
          onClick={() => saveToCard(quantity, id)}
        >
          <ShoppingCartIcon fontSize="medium" /> &nbsp; Add To Cart
        </Button>
      </Grid>
    </Grid>
  );
};
