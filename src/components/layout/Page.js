import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "flex-start"
  }
});

export default function Page({ children }) {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      {children}
    </main>
  )
}