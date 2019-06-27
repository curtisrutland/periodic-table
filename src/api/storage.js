const THEME_KEY = "mat-ui-drawer-boilerplate.theme";

export const theme = {
  set(val) { localStorage.setItem(THEME_KEY, val); },
  get() { return localStorage.getItem(THEME_KEY) || "light"; }
}