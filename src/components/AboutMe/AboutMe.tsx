import { Box, Typography } from "@mui/material";

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
        sx={{
          width: "70vw",
          display: "flex",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        {/* This box is for video */}
        <Box
          sx={{
            background: "#0f0",
            minWidth: "500px",
            height: "500px",
            marginRight: "50px",
          }}
        ></Box>
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
