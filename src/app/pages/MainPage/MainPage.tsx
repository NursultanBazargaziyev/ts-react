import { Box, Typography } from "@mui/material";

import Header from "../../../components/Header/Header";
import NavBar from "../../../components/common/NavBar/NavBar";

const MainPage = () => {
  return (
    <Box
      sx={{
        background: "#000",
        height: "500px",
      }}
    >
      <Header />
      <Typography sx={{ color: "#fff" }}>Main page</Typography>
    </Box>
  );
};

export default MainPage;
