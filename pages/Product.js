import React from "react";
import { useRouter } from "next/router";
import useProduct from "../src/hooks/useProduct";
import style from "../styles/Product.module.css";
import { Paper, Grid } from "@mui/material";
import ImageContainer from "../src/components/products/ImageContainer";
import ContentContainer from "../src/components/products/ContentContainer";
import ProductLayout from "../src/components/products/ProductContentLayout";
const ProductPage = () => {
  const router = useRouter();
  const query = router.query;
  const product = useProduct(query.id);
  console.log("hello", product);
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
            <ImageContainer {...product} />
          </Grid>
          <Grid item md={6} xs={12}>
            <ProductLayout>
              <ContentContainer {...product} />
            </ProductLayout>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default ProductPage;
