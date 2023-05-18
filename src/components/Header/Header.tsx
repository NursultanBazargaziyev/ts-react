import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import NavBar from "../NavBar/NavBar";

import style from "./Header.module.css";

const Header: FC = () => {
  return (
    <Box className={style.header}>
      <Box className={style.logo_wrapper}>
        <Typography
          sx={{
            display: " inline-block",
            fontFamily: "Minecraftia",
            fontSize: "1.5rem",
            color: "#fff",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textDecoration: "none",
          }}
          className={style.logo}
          component={(props) => <Link to="/" {...props} />}
        >
          nursultan
        </Typography>
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "1rem",
            bottom: 0,
            left: 0,
            background: "#000",
          }}
        ></Box>
      </Box>

      <NavBar />
      <Typography className={style.profile}>PROFILE</Typography>
    </Box>
  );
};

export default Header;
