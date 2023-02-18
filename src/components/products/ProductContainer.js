import React from "react";
import { Grid, IconButton, styled, Typography, Button } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";

const ContainerWrapper = styled(Grid)`
  border-radius: 5px;
  background-color: hsl(223, 64%, 98%);
  align-items: center;
  justify-content: space-between;
`;

export const ProductContainer = () => {
  const [quantity, setQuantity] = useState(0);

  return (
    <Grid
      container
      sx={{ alignItems: "center" }}
      m={{ sx: "10px" }}
      columnSpacing={2}
    >
      <ContainerWrapper item xs={12} md={4} sm={12} container>
        <Grid item>
          <IconButton
            onClick={() => setQuantity(quantity >= 1 ? quantity - 1 : quantity)}
            color="warning"
          >
            <RemoveIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2" color={"text.primary"}>
            {quantity}
          </Typography>
        </Grid>
        <Grid item>
          <IconButton onClick={() => setQuantity(quantity + 1)} color="warning">
            <AddIcon />
          </IconButton>
        </Grid>
      </ContainerWrapper>
      <Grid item mt={{ xs: "14px", md: "0px" }} md={6} xs={12}>
        <Button
          variant="contained"
          sx={{ fontSize: "12px", fontWeight: "bolder", width: "100%" }}
          color="warning"
        >
          <ShoppingCartIcon fontSize="small" /> &nbsp; Add to Card
        </Button>
      </Grid>
    </Grid>
  );
};
