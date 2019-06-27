import React from "react";
import { styled } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import ExtensionIcon from "@material-ui/icons/Extension";
import Page from "components/layout/Page";
import { LinkFab } from "components/LinkButton";

const HomeLinkFab = styled(LinkFab)({
  position: "fixed",
  bottom: 0,
  right: 0,
  margin: 20
});

export default function Test() {
  return (
    <Page>
      <Typography style={{ margin: 50, marginTop: 0 }}>1. This is an example with scrolling</Typography>
      <Typography style={{ margin: 50 }}>This is an example with scrolling</Typography>
      <Typography style={{ margin: 50 }}>This is an example with scrolling</Typography>
      <Typography style={{ margin: 50 }}>This is an example with scrolling</Typography>
      <Typography style={{ margin: 50 }}>This is an example with scrolling</Typography>
      <Typography style={{ margin: 50 }}>This is an example with scrolling</Typography>
      <Typography style={{ margin: 50 }}>This is an example with scrolling</Typography>
      <Typography style={{ margin: 50 }}>This is an example with scrolling</Typography>
      <Typography style={{ margin: 50 }}>This is an example with scrolling</Typography>
      <Typography style={{ margin: 50 }}>This is an example with scrolling</Typography>
      <Typography style={{ margin: 50 }}>This is an example with scrolling</Typography>
      <Typography style={{ margin: 50 }}>This is an example with scrolling</Typography>
      <Typography style={{ margin: 50 }}>This is an example with scrolling</Typography>
      <Typography style={{ margin: 50 }}>This is an example with scrolling</Typography>
      <Typography style={{ margin: 50 }}>This is an example with scrolling</Typography>
      <Typography style={{ margin: 50 }}>This is an example with scrolling</Typography>
      <Typography style={{ margin: 50 }}>This is an example with scrolling</Typography>
      <Typography style={{ margin: 50 }}>This is an example with scrolling</Typography>
      <Typography style={{ margin: 50 }}>This is an example with scrolling</Typography>
      <Typography style={{ margin: 50 }}>This is an example with scrolling</Typography>
      <Typography style={{ margin: 50 }}>This is an example with scrolling</Typography>
      <Typography style={{ margin: 50 }}>This is an example with scrolling</Typography>
      <Typography style={{ margin: 50 }}>This is an example with scrolling</Typography>
      <Typography style={{ margin: 50 }}>This is an example with scrolling</Typography>
      <Typography style={{ margin: 50 }}>This is an example with scrolling</Typography>
      <Typography style={{ margin: 50 }}>This is an example with scrolling</Typography>
      <Typography style={{ margin: 50 }}>This is an example with scrolling</Typography>
      <Typography style={{ margin: 50 }}>This is an example with scrolling</Typography>
      <HomeLinkFab to="/" variant="extended" color="primary">
        Home
      </HomeLinkFab>
    </Page>
  )
}

export const testRoute = {
  Icon: ExtensionIcon,
  Component: Test,
  path: "/example",
  name: "Example"
}