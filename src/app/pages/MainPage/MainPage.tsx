import React from "react";
import { Box, Typography } from "@mui/material";

const MainPage = () => {
  return (
    <Box
      sx={{
        height: "500px",
      }}
    >
      <Typography
        sx={{
          display: "block",
          width: "100px",
          margin: "200px auto",
          color: "#fff",
        }}
      >
        Main page
      </Typography>
    </Box>
  );
};

export default MainPage;
