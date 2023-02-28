import { FormControl, Paper, TextField, Typography } from "@mui/material";
import React from "react";
const Login = () => {
  return (
    <Paper
      sx={{
        boxShadow: 1,
        width: "300px",
        height: "400px",
        margin: "4rem auto",
        p: 1,
      }}
    >
      <Typography variant="body1" fontWeight={300} textAlign={"center"}>
        Welcome back To Snap 😊
      </Typography>
      <FormControl fullWidth sx={{ mt: 2 }}>
        <TextField fullWidth size="small" label="Username" />
      </FormControl>
    </Paper>
  );
};

export default Login;
