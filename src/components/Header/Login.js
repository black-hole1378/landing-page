import React from "react";
import { selectAuthUser } from "../../State/Slice/authSlice";
import { useSelector } from "react-redux";
import Link from "next/link";
import { Typography } from "@mui/material";
const Login = () => {
  const authenticate = useSelector(selectAuthUser);

  if (!authenticate)
    return (
      <Link href="/Login" style={{ textDecoration: "none" }}>
        <Typography
          color="text.primary"
          variant="body1"
          fontWeight={300}
          fontSize={{ xs: "0.8rem", sm: "0.9rem", md: "1rem" }}
        >
          Login
        </Typography>
      </Link>
    );
  else
    return (
      <div>
        <div></div>
      </div>
    );
};

export default Login;
