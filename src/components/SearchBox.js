import React, { useState, useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import AppMenu from "./AppMenu";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "stretch",
    position: "fixed",
    left: "50%",
    transform: "translate(-50%, 0)",
    zIndex: 1,
    boxShadow: theme.shadows[3]
  },
  search: {
    zIndex: 2,
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  }
}));

export default function SearchBox({ value, onChange }) {
  const classes = useStyles();
  const inputRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  function handleChange(evt) {
    onChange(evt.target.value);
  }

  function handleClear() {
    onChange("");
    focusInput();
  }

  function handleMenuClick() {
    setMenuOpen(!menuOpen);
  }

  function handleMenuClose() {
    setMenuOpen(false);
  }

  function focusInput() {
    inputRef.current.focus();
  }

  useEffect(focusInput, []);

  return (
    <div className={classes.root}>
      <Paper elevation={0} square className={classes.search}>
        <IconButton className={classes.iconButton} aria-label="Menu" onClick={handleMenuClick}>
          <MenuIcon />
        </IconButton>
        <InputBase
          className={classes.input}
          placeholder="Search Elements"
          inputProps={{ "aria-label": "Search Elements", ref: inputRef }}
          value={value}
          onChange={handleChange}
        />
        <IconButton className={classes.iconButton} aria-label="Search" onClick={handleClear}>
          <CloseIcon />
        </IconButton>
      </Paper>
      <AppMenu open={menuOpen} onClose={handleMenuClose} />
    </div>
  );
}