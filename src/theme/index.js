import { createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import deepOrange from "@material-ui/core/colors/deepOrange"

const palette = {
  primary: blue,
  secondary: deepOrange
}

const typography = {
  fontFamily: ["Inconsolata", "monospace"]
}

export const lightTheme = createMuiTheme({
  palette: {
    ...palette,
    type: "light"
  },
  typography
});

export const darkTheme = createMuiTheme({
  palette: {
    ...palette,
    type: "dark"
  },
  typography
});

export function getTheme(theme) {
  return theme === "light" ? lightTheme : darkTheme;
}