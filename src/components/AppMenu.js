import React from "react";
import { styled } from "@material-ui/styles";
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Paper from '@material-ui/core/Paper';
import { useThemeToggle } from "providers/ThemeToggleProvider";
import LightbulbFullIcon from "components/icons/LightbulbFull";
import LightbulbOutlineIcon from "components/icons/LightbulbOutline";
import GithubIcon from "components/icons/Github";

const Root = styled(Paper)({ width: 400 });
const Menu = styled(List)({ width: 400 });
const CenteredMenuItem = styled(MenuItem)({ textAlign: "center" });

export default function AppMenu({ open, onClose }) {
  const { theme, toggleTheme } = useThemeToggle();

  function handleMenuClose() {
    onClose();
  }

  function handleToggleTheme() {
    toggleTheme();
    handleMenuClose();
  }

  const ThemeIcon = theme === "light" ? LightbulbOutlineIcon : LightbulbFullIcon;
  const themeText = `Use ${theme === "light" ? "dark" : "light"} theme`;

  return (
    <Collapse in={open}>
      <Root elevation={0} square>
        <Menu>
          <CenteredMenuItem disabled>
            <ListItemText primary={process.env.REACT_APP_MENU_TITLE} secondary={`v${process.env.REACT_APP_VERSION}`} />
          </CenteredMenuItem>
          <MenuItem component="a" target="_blank" onClick={handleMenuClose} href={process.env.REACT_APP_PROJECT_URL}>
            <ListItemIcon>
              <GithubIcon />
            </ListItemIcon>
            <ListItemText primary="View Project" />
          </MenuItem>
          <MenuItem onClick={handleToggleTheme}>
            <ListItemIcon>
              <ThemeIcon />
            </ListItemIcon>
            <ListItemText primary={themeText} />
          </MenuItem>
        </Menu>
      </Root>
    </Collapse>
  )
}