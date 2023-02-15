import { Container, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import Style from "../../../styles/Home.module.css";
import ContentContainer from "./ContentContainer";
import Link from "next/link";
import SocialMediaContainer from "./SocialMediaContainer";
import { Box } from "@mui/system";

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
            <Grid item md={3} xs={12}>
              <ContentContainer />
            </Grid>
            <Grid item md={3} xs={12}>
              <Stack spacing={1}>
                <Typography
                  fontSize={{ xs: "0.6rem", sm: "0.9rem", md: "1rem" }}
                >
                  <Link className={Style.link} href="/about">
                    About
                  </Link>
                </Typography>

                <Typography
                  fontSize={{ xs: "0.6rem", sm: "0.9rem", md: "1rem" }}
                >
                  <Link href="/about" className={Style.link}>
                    About me
                  </Link>
                </Typography>
              </Stack>
            </Grid>

            <Grid item md={3} xs={12}>
              <Stack spacing={1}>
                <Typography
                  fontSize={{ xs: "0.6rem", sm: "0.9rem", md: "1rem" }}
                >
                  <Link className={Style.link} href="/about">
                    Privacy Policy
                  </Link>
                </Typography>

                <Typography
                  fontSize={{ xs: "0.6rem", sm: "0.9rem", md: "1rem" }}
                >
                  <Link href="/about" className={Style.link}>
                    Terms and Conditions
                  </Link>
                </Typography>
              </Stack>
            </Grid>

            <Grid item md={3} xs={12}>
              <SocialMediaContainer />
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </footer>
  );
};

export default Footer;
