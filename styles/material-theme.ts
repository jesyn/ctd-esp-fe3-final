import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  palette: {
    primary: {
      main: "#629AD4", //blue
    },
    secondary: {
      main: "#ca4a44", // red
    },
    success: {
      main: "#4caf50", // green
    },
  },
});
