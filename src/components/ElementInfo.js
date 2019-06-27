import React from 'react';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Transition from '@material-ui/core/Zoom';

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
          <Paper square elevation={10} style={{ width: 200, height: 200 }}>
            {renderContent()}
            <Typography component="a" onClick={onClose}>Close</Typography>
          </Paper>
        </Transition>
      )}
    </Popper>
  )
}