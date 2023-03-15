import React from "react";
import Sidebar from "../../src/settting/Sidebar";
import style from "../../styles/setting.module.css";
import { Box } from "@mui/material";
const changeProfile = () => {
  return (
    <div className={style.change_profile}>
      <Box flexDirection={"column"}></Box>
    </div>
  );
};

export default changeProfile;
