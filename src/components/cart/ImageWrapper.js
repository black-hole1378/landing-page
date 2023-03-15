/* eslint-disable @next/next/no-img-element */
import React from "react";
import Style from "../../../styles/cart.module.css";
import { Box } from "@mui/material";
const ImageWrapper = (image) => {
  return (
    <Box mt={1}>
      <img
        src={"./images/image-product-1.jpg"}
        className={Style.image}
        alt="):"
      />
    </Box>
  );
};

export default ImageWrapper;
