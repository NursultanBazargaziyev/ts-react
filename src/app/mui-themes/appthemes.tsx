import { createTheme } from "@mui/material";

const apptheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 650,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export { apptheme };