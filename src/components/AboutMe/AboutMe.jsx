import { Box, Typography } from "@mui/material";

import ascii from "videos/ascii.webm";

const AboutMe = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        color: "#fff",
        textAlign: "center",
        width: "100%",
      }}
    >
      <Box
        id="boxParent"
        sx={{
          width: "70vw",
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        {/* This box is for video */}
        <canvas style={{ display: "none" }} id="boxCanvas" />
        <video
          id="videoBox"
          style={{
            // display: "none"
            width: "500px",
            height: "500px",
          }}
          autoPlay
          muted
          loop
          src={ascii}
        ></video>
        {/* This box is for description */}
        <Box sx={{}}>
          <Typography
            sx={{
              display: "block",
              fontSize: "2rem",
              fontFamily: "GlassTTY VT220",
            }}
          >
            Hi, my name is{" "}
            <Box
              sx={{ fontFamily: "GlassTTY VT220", color: "#0f0" }}
              component="span"
            >
              Bazargaziyev Nursultan. <br />
            </Box>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;
