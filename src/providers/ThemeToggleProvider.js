import React, { createContext, useState, useContext } from "react";
import * as storage from "api/storage";

export const ThemeToggleContext = createContext({
  theme: storage.theme.get(),
  toggleTheme: () => { }
});

export function ThemeToggleProvider({ children }) {
  const [theme, setTheme] = useState(storage.theme.get());

  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    console.debug(`toggle theme: ${newTheme}`);
    storage.theme.set(newTheme);
    setTheme(newTheme);
  }

  return(
    <ThemeToggleContext.Provider value={{theme: theme, toggleTheme: toggleTheme}}>
      {children}
    </ThemeToggleContext.Provider>
  )
}

export function useThemeToggle() {
  const val = useContext(ThemeToggleContext);
  return val;
}