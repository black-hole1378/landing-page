/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Box } from "@mui/material";
import style from "../../../styles/Product.module.css";
const ImageContainer = ({ image }) => {
  return (
    <Box display={"flex"} p={2} justifyContent={"center"}>
      <img className={style.image} src={image} alt={"Not Supported"} />
    </Box>
  );
};

export default ImageContainer;
