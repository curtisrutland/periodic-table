import React, { useState, useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import LightbulbFullIcon from "components/icons/LightbulbFull";
import LightbulbOutlineIcon from "components/icons/LightbulbOutline";
import { useThemeToggle } from "providers/ThemeToggleProvider";

const useStyles = makeStyles({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
    position: "fixed",
    left: "50%",
    transform: "translate(-50%, 0)"
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  }
});

export default function SearchBox({ value, onChange }) {
  const classes = useStyles();
  const inputRef = useRef(null);
  const { theme, toggleTheme } = useThemeToggle();
  const [anchor, setAnchor] = useState(null);

  function handleChange(evt) {
    onChange(evt.target.value);
  }

  function handleClear() {
    onChange("");
  }

  function handleMenuClick(event) {
    setAnchor(event.currentTarget);
  }

  function handleMenuClose() {
    setAnchor(null);
  }

  function handleToggleTheme() {
    toggleTheme();
    handleMenuClose();
  }

  const ThemeIcon = theme === "light" ? LightbulbOutlineIcon : LightbulbFullIcon;
  const themeText = `Use ${theme === "light" ? "dark" : "light"} theme`;

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Paper square className={classes.root}>
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
      <Menu
        id="simple-menu"
        anchorEl={anchor}
        keepMounted
        open={Boolean(anchor)}
        onClose={handleMenuClose}
      >
        <MenuItem disabled>
          <ListItemText primary={process.env.REACT_APP_MENU_TITLE} secondary={`v${process.env.REACT_APP_VERSION}`} />
        </MenuItem>
        <MenuItem onClick={handleToggleTheme}>
          <ListItemIcon>
            <ThemeIcon />
          </ListItemIcon>
          <ListItemText primary={themeText} />
        </MenuItem>
      </Menu>
    </Paper>
  );
}