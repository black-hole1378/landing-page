import React from "react";
import { Stack, Card, styled, Box, Typography } from "@mui/material";

const ProductImage = styled("img")`
  width: 100%;
  height: 100px;
`;

const BoxContent = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Product = ({ product }) => {
  const { image, name, rating, price, countInStock } = product;
  console.log(image);
  return (
    <Card variant="outlined" sx={{ boxShadow: 1, padding: 5 }}>
      <Stack spacing={1}>
        <ProductImage src={image} alt="not Supported" />
        <BoxContent>
          <Typography variant="body1" component={"span"}>
            {name}
          </Typography>
        </BoxContent>
        <BoxContent>
          <Typography variant="body1" component={"span"}>
            Quantity: {countInStock == 0 ? "Does not Exist" : countInStock}
          </Typography>
        </BoxContent>
        <Box
          display={"flex"}
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="body1" component="span">
            Price: {price}$
          </Typography>
          <Typography variant="body1" component="span">
            Rating: {rating}
          </Typography>
        </Box>
      </Stack>
    </Card>
  );
};

export default Product;
