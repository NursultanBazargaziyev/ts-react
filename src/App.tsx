import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "components/Header/Header";

const App = () => {
  return (
    <Box sx={{ backgroundColor: "#000", height: "200vh" }}>
      <Header />
      <Outlet />
    </Box>
  );
};

export default App;
