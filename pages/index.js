import React from "react";
import useProduct from "../src/hooks/useProducts";
import Product from "../src/components/products/Product";
import { Container, Grid } from "@mui/material";
import Link from "next/link";
import Filter from "../src/components/filter/Filter";
import Skelton from "../src/components/Skelton";
const style = {
  textDecoration: "none",
  outline: "none",
};

export default function Index() {
  const { products, setProducts } = useProduct();
  return (
    <Container maxWidth="xl" sx={{ mt: 1, mb: 2 }}>
      <Filter products={products} setProducts={setProducts} />
      <Grid
        container
        rowSpacing={{ xs: 1, md: 2, sm: 1.5 }}
        columnSpacing={{ xl: 3, md: 2, sm: 1 }}
      >
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            {product ? (
              <Link
                href={{ pathname: "/Product", query: { id: product._id } }}
                style={style}
              >
                <Product product={product} />
              </Link>
            ) : (
              <Skelton />
            )}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
