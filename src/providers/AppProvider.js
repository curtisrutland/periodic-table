import React from "react";
import { ThemeToggleProvider } from "./ThemeToggleProvider";
import MaterialThemeProvider from "./MaterialThemeProvider";

export default function AppProvider({ children }) {
  return (
    <ThemeToggleProvider>
      <MaterialThemeProvider>
        {children}
      </MaterialThemeProvider>
    </ThemeToggleProvider>
  )
}