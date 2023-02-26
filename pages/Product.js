import React from "react";
import { useRouter } from "next/router";
import useProduct from "../src/hooks/useFetch";
import style from "../styles/Product.module.css";
import { Paper, Grid } from "@mui/material";
import {
  ProductLayout,
  ImageContainer,
  PurchaseLayout,
  ContentContainer,
} from "../src/components/products/index";
import ErrorPage from "next/error";
const ProductPage = () => {
  const router = useRouter();
  const query = router.query;
  const { data, error } = useProduct(query.id);

  if (error) return <ErrorPage statusCode={4004} />;
  else
    return (
      <div className={style.container}>
        <Paper
          sx={{
            width: "100%",
            height: "100%",
            boxShadow: 1,
          }}
        >
          <Grid container>
            <Grid item md={6} xs={12}>
              <ImageContainer {...data} />
            </Grid>
            <Grid item md={6} xs={12}>
              <ProductLayout>
                <ContentContainer {...data} />
                <PurchaseLayout {...data} />
              </ProductLayout>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
};

export default ProductPage;
