import React from "react";
import { styled } from "@material-ui/styles";
import Popper from "@material-ui/core/Popper";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Transition from "@material-ui/core/Zoom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import ElementInfo from "./ElementInfo";
import WikipediaIcon from "components/icons/Wikipedia";
const Box = styled(Paper)({
  width: "50vw",
  height: "35vh",
  display: "flex",
  flexFlow: "column nowrap",
  alignItems: "stretch"
});

const Title = styled(Typography)({ flexGrow: 1 });
const Close = styled(CloseIcon)(({ theme }) => ({ width: theme.spacing(2), height: theme.spacing(2) }));
const Header = styled(Toolbar)(({ theme }) => ({ paddingRight: theme.spacing(1) }));

export default function ElementInfoWindow({
  element,
  anchor,
  onClose,
  transitionTimeout
}) {
  const open = Boolean(anchor);
  const id = open ? "element-info" : undefined;

  return (
    <Popper
      style={{ zIndex: 100 }}
      id={id}
      open={open}
      anchorEl={anchor}
      transition
    >
      {({ TransitionProps }) => (
        <Transition {...TransitionProps} timeout={transitionTimeout}>
          <Box square elevation={10}>
            <AppBar position="static" color="default">
              <Header variant="dense">
                <Title variant="h6" color="inherit">{element.number} | {element.symbol} | {element.name}</Title>
                <Tooltip title="View on Wikipedia" placement="top">
                  {element.source && (
                    <IconButton component="a" href={element.source} target="_blank">
                      <WikipediaIcon />
                    </IconButton>
                  )}
                </Tooltip>
                <IconButton onClick={onClose}>
                  <Close />
                </IconButton>
              </Header>
            </AppBar>
            <ElementInfo element={element} />
          </Box>
        </Transition>
      )}
    </Popper>
  )
}