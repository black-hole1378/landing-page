import React from "react";
import { Stack, Typography, Box, styled } from "@mui/material";

const HeadingWrappper = styled(Typography)`
  color: rgb(248, 159, 90);
  font-size: 0.8rem;
  font-weight: 600;
`;

const ContentWrapper = styled(Box)`
  background-color: hsl(223, 64%, 98%);
  padding: 6px;
  width: max-content;
  border-radius: 4px;
`;

const ContentContainer = ({
  name,
  price,
  description,
  category,
  brand,
  countInStock,
  numReviews,
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
      <ContentWrapper>
        <Typography variant="h5" color={"orange"} fontWeight={600}>
          ${price}
        </Typography>
      </ContentWrapper>
      <ContentWrapper>
        <Typography variant="body1" color={"text.secondary"}>
          Brand: {brand}
        </Typography>
      </ContentWrapper>
      {countInStock == 0 ? (
        <Typography variant="body2" color={"text.secondary"}>
          Does not Exist 😭
        </Typography>
      ) : (
        <Typography variant="body2">Qunatity: {countInStock}</Typography>
      )}
      <ContentWrapper>
        <Typography variant="body1">Number of Reviews: {numReviews}</Typography>
      </ContentWrapper>
    </Stack>
  );
};

export default ContentContainer;
