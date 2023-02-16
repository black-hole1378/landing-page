import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";
import style from "../../../styles/Product.module.css";
const ImageContainer = ({ image }) => {
  return (
    <Box display={"flex"} p={2} justifyContent={"center"}>
      <Image src={image} height="305px" alt="Not supported" fill />
    </Box>
  );
};

export default ImageContainer;
