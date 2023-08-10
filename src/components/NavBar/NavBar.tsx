import { FC } from "react";
import { Box, styled } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const StyledLink = styled(RouterLink)(({ theme }) => ({
  fontFamily: "GlassTTY VT220",
  fontSize: "1.3rem",
  display: "inline-block",
  lineHeight: "1.5",
  textDecoration: "none",
  color: "#fff",

  "@media (max-width: 900px)": {
    fontSize: "0.8rem",
  },
}));

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  width: "400px",

  "@media (max-width: 900px)": {
    width: "200px",
  },
}));

const NavBar: FC = () => {
  return (
    <StyledBox>
      <StyledLink to="/">main</StyledLink>
      <StyledLink to="projects">my projects</StyledLink>
    </StyledBox>
  );
};

export default NavBar;
