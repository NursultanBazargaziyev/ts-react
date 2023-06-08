import { Box, Typography, Link, List, ListItem } from "@mui/material";

import style from "../Header.module.css";

const SideBar = () => {
  return (
    <Box>
      <Box
        sx={{
          position: "absolute",
          height: "100vh",
          width: "40%",
          top: "0",
          left: "0",
          background: "rgba(0, 150, 0, 0.5)",
          transition: "width 2s",
          padding: "10px 10px",
          zIndex: 2,
        }}
      >
        <Box className={style.logo_wrapper}>
          <Typography
            sx={{
              fontFamily: "Minecraftia",
              fontSize: { xs: "0.8rem" },
              color: "#0f0",
              whiteSpace: "nowrap",
              overflow: "hidden",
              paddingLeft: "15px",
              textDecoration: "none",
            }}
            className={style.logo}
            component={(props) => <Link to="/" {...props} />}
          >
            nursultan
          </Typography>
        </Box>
        <List>
          <ListItem>
            <Link
              href="https://github.com/NursultanBazargaziyev"
              target="_blank"
              sx={link_style}
            >
              GitHub
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://linkedin.com/in/nursultan-bazargaziyev/"
              target="_blank"
              sx={link_style}
            >
              Linkedin
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/" sx={link_style}>
              Main
            </Link>
          </ListItem>
          <ListItem>
            <Link href="projects" sx={link_style}>
              Projects
            </Link>
          </ListItem>
        </List>
      </Box>
      <Box
        id="blocker"
        sx={{
          position: "absolute",
          height: "100vh",
          width: "60%",
          top: "0",
          right: "0",
          background: "rgba(0, 0, 0, 0.8)",
          zIndex: 2,
        }}
      ></Box>
    </Box>
  );
};

const link_style = {
  color: "rgba(0, 255, 0, 1)",
  fontFamily: "GlassTTY VT220",
  textDecoration: "underline #00ff00",
};

export default SideBar;
