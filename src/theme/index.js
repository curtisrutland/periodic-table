import { createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import deepOrange from "@material-ui/core/colors/deepOrange";
// import red from "@material-ui/core/colors/red";
import lime from "@material-ui/core/colors/lime";

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
    type: "light",
    emphasized: deepOrange["A400"]
  },
  typography
});

export const darkTheme = createMuiTheme({
  palette: {
    ...palette,
    type: "dark",
    emphasized: lime["A200"]
  },
  typography
});

export function getTheme(theme) {
  return theme === "light" ? lightTheme : darkTheme;
}