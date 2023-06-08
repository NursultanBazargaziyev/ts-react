import { FC, useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import NavBar from "../NavBar/NavBar";
import Social from "components/Social/Social";
import SideBar from "./common/SideBar";
import BurgerMenuIcon from "components/assets/Icons/BurgerMenuIcon";

import style from "./Header.module.css";

const Header: FC = () => {
  const [shouldRender, setShouldRender] = useState(true);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [shouldSideBarRender, setShouldSideBarRender] = useState(false);

  useEffect(() => {
    function resizeHandler() {
      setWindowSize(window.innerWidth);
    }
    function clickHandler(event: Event) {
      const target = event.target as HTMLElement;
      if (target.id === "blocker") {
        setShouldSideBarRender(false);
        document.body.style.overflowY = "visible";
      }
    }
    window.addEventListener("resize", resizeHandler);
    window.addEventListener("click", clickHandler);

    return () => {
      window.removeEventListener("click", resizeHandler);
      window.removeEventListener("click", clickHandler);
    };
  }, []);

  useEffect(() => {
    if (windowSize < 650) {
      setShouldRender(false);
    } else {
      setShouldRender(true);
    }
  }, [windowSize]);

  return (
    <Box className={style.header}>
      {shouldRender ? (
        <>
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
          <Social />
        </>
      ) : (
        <Box sx={{ background: "transparent" }}>
          {shouldSideBarRender ? (
            <SideBar />
          ) : (
            <Box
              onClick={() => {
                setShouldSideBarRender(true);
                document.body.style.overflowY = "hidden";
              }}
            >
              <BurgerMenuIcon />
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

const logoStyles = {
  display: " inline-block",
  fontFamily: "Minecraftia",
  fontSize: { xs: "0.5rem", sm: "1.5rem" },
  color: "#0f0",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textDecoration: "none",
};

const logoCoverStyle = {
  position: "absolute",
  width: "100%",
  height: {
    xs: "0.5rem",
    sm: "1rem",
  },
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
