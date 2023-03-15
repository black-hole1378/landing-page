import React from "react";
import { Paper, Box, Stack, Avatar, Typography } from "@mui/material";
import style from "../styles/profile.module.css";
const Profile = () => {
  return (
    <Paper className={style.profile_container} sx={{ boxShadow: 2, p: 6 }}>
      <Stack spacing={2}>
        <Box display="flex" justifyContent="center">
          <Avatar
            alt="Remy Sharp"
            src="./images/image-product-1.jpg"
            sx={{ width: 100, height: 100 }}
          />
        </Box>
        <Box
          display={"flex"}
          gap={1}
          justifyContent="center"
          alignItems={"center"}
        >
          <Typography textAlign={"center"} variant="h5">
            Barat Ali
          </Typography>
          <Typography textAlign={"center"} variant="h5">
            Hassanzada
          </Typography>
        </Box>
        <Typography variant="body1" fontWeight={300}>
          Email: baratalihassanzada1378@gmail.com
        </Typography>
        <Typography variant="body1" fontWeight={300}>
          Phone: 09935990492
        </Typography>

        <Typography variant="body1" fontWeight={300}>
          Gender: male
        </Typography>
        <Typography variant="body1" fontWeight={300}>
          City: Kabul
        </Typography>
      </Stack>
    </Paper>
  );
};

export default Profile;
