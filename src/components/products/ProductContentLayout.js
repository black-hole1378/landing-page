import React from "react";
import { Box, Stack, styled } from "@mui/material";
import { ProductContainer } from "./ProductContainer";

const ContentContainerWrapper = styled(Box)`
  width: 100%;
  height: max-content;
`;

const ProductLayout = ({ children }) => {
  return (
    <ContentContainerWrapper>
      <Stack spacing={3}>{children}</Stack>
    </ContentContainerWrapper>
  );
};

export default ProductLayout;
