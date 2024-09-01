import { createTheme, ThemeOptions } from "@mui/material";

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#47743F'
    },
    secondary: {
      main: '#19f705'
    },
  }
};

export const theme = createTheme(themeOptions);

export default theme;