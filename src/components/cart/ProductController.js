import React from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
const ProductController = () => {
  const [quantity, setQuantity] = React.useState(0);
  return (
    <Grid
      container
      sx={{ borderRadius: 5 }}
      alignItems={"center"}
      bgcolor="hsl(25, 100%, 94%)"
    >
      <Grid item md={5}>
        <IconButton>
          <RemoveIcon fontSize="small" />
        </IconButton>
      </Grid>
      <Grid item md={3}>
        <Typography variant="body2" component={"span"}>
          {quantity}
        </Typography>
      </Grid>
      <Grid item md={4}>
        <IconButton>
          <AddIcon fontSize="small" />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default ProductController;
