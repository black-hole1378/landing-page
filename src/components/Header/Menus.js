import React from "react";
import Link from "next/link";
import {
  Menu,
  MenuItem,
  Avatar,
  Box,
  styled,
  Typography,
  Divider,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
const style = {
  textDecoration: "none",
  outline: "none",
};

const BoxWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  gap: 14px;
`;

const ToggleMenu = ({ open, handleClose, anchorEl }) => {
  return (
    <React.Fragment>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        PaperProps={{ sx: { width: 250 } }}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <Link style={style} href={"/Profile"}>
            <BoxWrapper>
              <Avatar />
              <Typography variant="body1" color={"text.primary"}>
                Profile
              </Typography>
            </BoxWrapper>
          </Link>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <Link style={style} href={"/orders"}>
            <Typography ml={4.5} variant="body1" color={"text.primary"}>
              Orders
            </Typography>
          </Link>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <Link style={style} href={"/profile"}>
            <BoxWrapper>
              <SettingsIcon />
              <Typography variant="body1" color={"text.primary"}>
                Setting
              </Typography>
            </BoxWrapper>
          </Link>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <Link style={style} href={"/profile"}>
            <BoxWrapper>
              <LogoutIcon />
              <Typography variant="body1" color={"text.primary"}>
                LogOut
              </Typography>
            </BoxWrapper>
          </Link>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default ToggleMenu;
