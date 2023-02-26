import React from "react";
import { Container, Grid } from "@mui/material";
import Link from "next/link";
import { Filter, Product, Skelton } from "../src/components/index";
import style from "../styles/Home.module.css";
import useFetch from "../src/hooks/useFetchAll";
import fetch from "../src/data.json";
export default function Index() {
  const { data, setData, loading } = useFetch(fetch.fetch.products);
  return (
    <Container maxWidth="xl" sx={{ mt: 1, mb: 2 }}>
      <Filter products={data} setProducts={setData} />
      <Grid
        container
        rowSpacing={{ xs: 1, md: 2, sm: 1.5 }}
        columnSpacing={{ xl: 3, md: 2, sm: 1 }}
      >
        {data.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            {product ? (
              <Link
                href={{ pathname: "/Product", query: { id: product._id } }}
                className={style.productLink}
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
