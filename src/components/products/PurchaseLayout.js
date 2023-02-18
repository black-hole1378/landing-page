import { Box } from "@mui/material";
import React from "react";
import { ProductContainer } from "./ProductContainer";
import usePurchase from "../../hooks/usePurchase";
import Purchasesd from "./Purchased";
const PurchaseLayout = ({ countInStock, id }) => {
  const { added, deleteFromCard, saveToCard } = usePurchase();

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
    </>
  );
};

export default PurchaseLayout;
