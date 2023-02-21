import { Box, Snackbar, Alert } from "@mui/material";
import React from "react";
import { ProductContainer } from "./ProductContainer";
import usePurchase from "../../hooks/usePurchase";
import Purchasesd from "./Purchased";
const PurchaseLayout = ({ countInStock, id }) => {
  const [open, setOpen] = React.useState(false);
  const { added, deleteFromCard, saveToCard } = usePurchase(setOpen);

  return (
    <>
      <Box display={added ? "none" : "flex"}>
        <ProductContainer
          saveToCard={saveToCard}
          id={id}
          countInStock={countInStock}
        />
      </Box>
      <Box display={added ? "flex" : "none"}>
        <Purchasesd deleteFromCard={deleteFromCard} />
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Successfully added to your cart
        </Alert>
      </Snackbar>
    </>
  );
};

export default PurchaseLayout;
