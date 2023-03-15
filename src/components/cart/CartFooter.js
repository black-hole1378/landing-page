import { Box, Typography, Button, Container } from "@mui/material";
import React from "react";

const CartFooter = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 2 }}>
      <Box display="flex" justifyContent="space-between" alignItems={"center"}>
        <Typography variant="body1">Total price: {20000}$</Typography>
        <Button variant="contained">Next</Button>
      </Box>
    </Container>
  );
};

export default CartFooter;
