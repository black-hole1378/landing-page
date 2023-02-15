/* eslint-disable react/no-unescaped-entities */
import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
const SocialMediaContainer = () => {
  return (
    <Stack spacing={2}>
      <Typography variant="body2" color={"text.primary"} fontWeight={300}>
        Let's Chat 😊
      </Typography>
      <Box display={"flex"} alignItems="center" gap={"10px"}>
        <a
          href="https://github.com/black-hole1378/product_landing_page.git"
          target={"_blank"}
          rel="noreferrer"
        >
          <GitHubIcon fontSize="medium" />
        </a>
        <a href="https://instagrm.com" target={"_blank"} rel="noreferrer">
          <InstagramIcon fontSize="medium" />
        </a>
        <a href="https://facebook.com" target={"_blank"} rel="noreferrer">
          <FacebookIcon fontSize="medium" />
        </a>
        <a href="https://twitter.com" target={"_blank"} rel="noreferrer">
          <TwitterIcon fontSize="medium" />
        </a>
      </Box>
    </Stack>
  );
};

export default SocialMediaContainer;
