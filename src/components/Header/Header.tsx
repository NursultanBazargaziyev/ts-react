import React from "react";
import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import NavBar from "../common/NavBar/NavBar";

import styled from "./Header.module.css";

const Header = () => {
  return (
    <Box className={styled.header}>
      <NavBar />
    </Box>
  );
};

export default Header;
