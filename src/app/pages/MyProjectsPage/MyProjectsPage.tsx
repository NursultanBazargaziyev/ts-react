import React from "react";
import { Box, List, ListItem } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

const MyProjects = () => {
  return (
    <Box
      sx={{
        height: "500px",
        width: "1000px",
        display: "flex",
        justifyContent: "center",
        margin: "200px auto",
      }}
    >
      <Box className="navigation">
        <List>
          <ListItem>
            <Link to="serious">serious??</Link>
            <Link to="gamesnav">games</Link>
          </ListItem>
        </List>
        <Outlet />
      </Box>
    </Box>
  );
};

export default MyProjects;
