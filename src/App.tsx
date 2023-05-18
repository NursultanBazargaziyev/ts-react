import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "components/Header/Header";

const App = () => {
  return (
    <Box sx={{ backgroundColor: "#000", height: "1080px" }}>
      <Header />
      <Outlet />
    </Box>
  );
};

export default App;
