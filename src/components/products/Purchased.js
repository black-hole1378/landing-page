import { Button } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
const Purchasesd = ({ deleteFromCard }) => {
  return (
    <Button
      sx={{ width: "100%", padding: "5px", m: 2 }}
      variant="contained"
      color="error"
      onClick={() => deleteFromCard()}
    >
      <DeleteIcon fontSize="medium" />
    </Button>
  );
};

export default Purchasesd;
