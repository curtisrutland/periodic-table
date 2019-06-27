import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useThemeToggle } from "./ThemeToggleProvider";
import { getTheme } from "theme";

export default function MaterialThemeProvider({ children }) {
  const { theme } = useThemeToggle();
  return (
    <ThemeProvider theme={getTheme(theme)}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}