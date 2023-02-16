import { Box, Container, Grid, Paper } from "@mui/material";
import React from "react";
import Style from "../../../styles/Home.module.css";
import { LinkContainer, ContentContainer, SocialMediaContainer } from "./index";
const Footer = () => {
  return (
    <footer className={Style.footer}>
      <Paper
        sx={{
          boxShadow: 1,
          backgroundColor: "hsl(0, 0%, 100%)",
          width: "100%",
          p: 2,
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            columnSpacing={{ xs: 1, sm: 1.4, md: 2 }}
            rowSpacing={{ xs: 2 }}
          >
            <Grid item md={4} xs={12}>
              <ContentContainer />
            </Grid>
            <Grid item md={4} xs={12}>
              <LinkContainer />
            </Grid>
            <Grid item md={4}>
              <Box display={"flex"} justifyContent="center">
                <SocialMediaContainer />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </footer>
  );
};

export default Footer;
