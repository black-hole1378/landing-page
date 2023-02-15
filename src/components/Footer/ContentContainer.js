import React from "react";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";

const style = {
  textDecoration: "none",
  outline: "none",
};

const ContentContainer = () => {
  return (
    <Stack spacing={1}>
      <Link href="/" style={style}>
        <Typography
          variant="h6"
          fontSize={{ xs: "0.6rem", sm: "0.9rem", md: "1rem" }}
          color={"text.primary"}
        >
          Snap
        </Typography>
      </Link>
      <Typography
        variant="body2"
        fontSize={{ xs: "0.6rem", sm: "0.9rem", md: "1rem" }}
        color={"text.secondary"}
      >
        Snap is A Company that serves every products in Iran
      </Typography>
    </Stack>
  );
};

export default ContentContainer;
