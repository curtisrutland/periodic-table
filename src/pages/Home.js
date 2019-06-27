import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";
import Page from "components/layout/Page";
import LinkButton from "components/LinkButton";
import { useThemeToggle } from "providers/ThemeToggleProvider";
import { testRoute } from "./Test";

export default function Home() {
  const { toggleTheme } = useThemeToggle();
  return (
    <Page>
      <Typography>Hello World</Typography>
      <LinkButton variant="contained" to={testRoute.path} color="secondary">Go To Example Page</LinkButton>
      <Button variant="outlined" color="primary" onClick={toggleTheme}>Toggle Theme</Button>
    </Page>
  )
}

export const homeRoute = {
  Icon: HomeIcon,
  Component: Home,
  path: "/",
  name: "Home",
  defaultRoute: true
}