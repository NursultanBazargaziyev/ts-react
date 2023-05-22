import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "300px",
        paddingBottom: "2.5rem",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
      }}
    >
      <Typography sx={{ fontSize: "1rem", color: "#fff" }}>
        ©2023 Bazargaziyev Nursultan
      </Typography>
    </Box>
  );
};

export default Footer;
