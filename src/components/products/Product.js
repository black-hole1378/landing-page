import React from "react";
import { Stack, Card, styled, Box, Typography } from "@mui/material";

const ProductImage = styled("img")`
  width: 200px;
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
    <Card
      variant="outlined"
      sx={{ boxShadow: 1, padding: 5, height: 300, maxHeight: 400 }}
    >
      <Stack spacing={1}>
        <Box display="flex" justifyContent="center">
          <ProductImage src={image} alt="not Supported" />
        </Box>
        <BoxContent>
          <Typography
            fontSize={{ xs: "0.8rem", sm: "0.9rem", md: "1rem" }}
            variant="body1"
            component={"span"}
          >
            {name}
          </Typography>
        </BoxContent>
        <BoxContent>
          <Typography
            fontSize={{ xs: "0.8rem", sm: "0.9rem", md: "1rem" }}
            variant="body1"
            component={"span"}
          >
            {countInStock == 0
              ? "Does not Exist 😒"
              : `Quantity: ${countInStock}`}
          </Typography>
        </BoxContent>
        <Box
          display={"flex"}
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography
            fontSize={{ xs: "0.6rem", sm: "0.9rem", md: "1rem" }}
            variant="body1"
            component="span"
          >
            Price: {price}$
          </Typography>
          <Typography
            fontSize={{ xs: "0.6rem", sm: "0.9rem", md: "1rem" }}
            variant="body1"
            component="span"
          >
            Rating: {rating}
          </Typography>
        </Box>
      </Stack>
    </Card>
  );
};

export default Product;
