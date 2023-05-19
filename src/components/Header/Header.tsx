import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import NavBar from "../NavBar/NavBar";

import style from "./Header.module.css";

const Header: FC = () => {
  return (
    <Box className={style.header}>
      <Box className={style.logo_wrapper}>
        <Typography
          sx={logoStyles}
          className={style.logo}
          component={(props) => <Link to="/" {...props} />}
        >
          nursultan
        </Typography>
        <Box sx={logoCoverStyle}></Box>
      </Box>
      <NavBar />
      <Typography sx={profileStyle}>profile</Typography>
    </Box>
  );
};

const logoStyles = {
  display: " inline-block",
  fontFamily: "Minecraftia",
  fontSize: "1.5rem",
  color: "#0f0",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textDecoration: "none",
};

const logoCoverStyle = {
  position: "absolute",
  width: "100%",
  height: "1rem",
  bottom: 0,
  left: 0,
  background: "#000",
};

const profileStyle = {
  color: "#fff",
  fontFamily: "Courier New",
  fontSize: "1.3rem",
};

export default Header;
