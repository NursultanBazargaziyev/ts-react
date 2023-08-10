import { Box, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "components/Header/Header";
import { apptheme } from "app/mui-themes/appthemes";

const App = () => {
  return (
    <ThemeProvider theme={apptheme}>
      <Box sx={{ backgroundColor: "#000" }}>
        <Header />
        <Outlet />
      </Box>
    </ThemeProvider>
  );
};

export default App;
