import React from "react";
import useProduct from "../src/hooks/useProducts";
import Product from "../src/components/products/Product";
import { Container, Grid } from "@mui/material";
import Link from "next/link";
import ErrorBoundary from "./ErrorBoundary";

const style = {
  textDecoration: "none",
  outline: "none",
};

export default function Index() {
  const products = useProduct();
  console.log(products);
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 2 }}>
      <Grid
        container
        rowSpacing={{ xs: 1, md: 2, sm: 1.5 }}
        columnSpacing={{ xl: 3, md: 2, sm: 1 }}
      >
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ErrorBoundary>
              <Link
                href={{ pathname: "/Product", query: { id: product._id } }}
                style={style}
              >
                <Product product={product} />
              </Link>
            </ErrorBoundary>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
