import { FC, useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Social from "components/Social/Social";
import SideBar from "./common/SideBar";
import BurgerMenuIcon from "components/assets/Icons/BurgerMenuIcon";

import style from "./Header.module.css";

const Header: FC = () => {
  return (
    <Box className={style.header}>
      <Box className={style.logo_wrapper}>
        <Typography
          className={style.header_logo}
          sx={{
            fontFamily: "Minecraftia",
          }}
          component={(props) => <Link to="/" {...props} />}
        >
          nursultan
        </Typography>
      </Box>
      <NavBar />
      <Social />
      {/* <Box sx={{ background: "transparent" }}>
        <SideBar />
        <Box>
          <BurgerMenuIcon />
        </Box>
      </Box> */}
    </Box>
  );
};

export default Header;
