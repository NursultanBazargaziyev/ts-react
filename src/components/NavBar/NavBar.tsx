import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

import style from "./NavBar.module.css";

const NavBar: FC = () => {
  return (
    <Box className={style.navbar}>
      <Link className={style.navbar_item} to="/">
        Main
      </Link>
      <Link className={style.navbar_item} to="projects">
        My Projects
      </Link>
    </Box>
  );
};

export default NavBar;
