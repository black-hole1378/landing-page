import { Box, Typography, Stack } from "@mui/material";
import React from "react";
import Link from "next/link";
import Style from "../../../styles/Home.module.css";
const LinkContainer = () => {
  return (
    <Box display={"flex"} justifyContent="space-between" alignItems={"center"}>
      <Stack spacing={1}>
        <Typography fontSize={{ xs: "0.6rem", sm: "0.9rem", md: "1rem" }}>
          <Link className={Style.link} href="/about">
            About
          </Link>
        </Typography>

        <Typography fontSize={{ xs: "0.6rem", sm: "0.9rem", md: "1rem" }}>
          <Link href="/about" className={Style.link}>
            About me
          </Link>
        </Typography>
      </Stack>
      <Stack spacing={1}>
        <Typography fontSize={{ xs: "0.6rem", sm: "0.9rem", md: "1rem" }}>
          <Link className={Style.link} href="/about">
            Privacy Policy
          </Link>
        </Typography>

        <Typography fontSize={{ xs: "0.6rem", sm: "0.9rem", md: "1rem" }}>
          <Link href="/about" className={Style.link}>
            Terms and Conditions
          </Link>
        </Typography>
      </Stack>
    </Box>
  );
};

export default LinkContainer;
