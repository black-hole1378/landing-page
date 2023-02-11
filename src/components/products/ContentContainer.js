import React from "react";
import { Stack, Typography, Box, styled } from "@mui/material";

const HeadingWrappper = styled(Typography)`
  color: rgb(248, 159, 90);
  font-size: 0.8rem;
  font-weight: 600;
`;

const ContentContainer = ({
  name,
  price,
  description,
  category,
  brand,
  countInStock,
}) => {
  return (
    <Stack spacing={2} p={2}>
      <HeadingWrappper variant="subtitle2">{category}</HeadingWrappper>
      <Typography variant="h6" fontWeight={600} color={"text.primary"}>
        {name}
      </Typography>
      <Typography fontSize={"0.9rem"} color={"text.secondary"}>
        {description}
      </Typography>
      <Typography variant="h5" fontWeight={600}>
        ${price}
      </Typography>
      <Typography variant="body1" color={"text.secondary"}>
        Brand: {brand}
      </Typography>
      {countInStock !== 0 ? (
        <Typography variant="body2">Qunatity: {countInStock}</Typography>
      ) : (
        <Typography color={"text.secondary"}>Does not Exist!</Typography>
      )}
    </Stack>
  );
};

export default ContentContainer;
