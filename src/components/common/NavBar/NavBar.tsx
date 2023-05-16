import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const NavBar: FC = () => {
  return (
    <Box>
      <Link to="/">Nav test</Link>
    </Box>
  );
};

export default NavBar;
