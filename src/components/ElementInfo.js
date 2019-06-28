import React from 'react';
import { styled } from "@material-ui/styles"; 
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Transition from '@material-ui/core/Zoom';

const Box = styled(Paper)({
  width: "50vw",
  height: "35vh"
});

export default function ElementInfo({
  element,
  anchor,
  onClose,
  transitionTimeout
}) {
  const open = Boolean(anchor);
  const id = open ? "element-info" : undefined;

  function renderContent() {
    if (!element) return null;
    return (
      <>
        <Typography>{element.name}</Typography>
      </>
    )
  }
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
            {renderContent()}
            <Typography component="a" onClick={onClose}>Close</Typography>
          </Box>
        </Transition>
      )}
    </Popper>
  )
}