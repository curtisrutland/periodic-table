import React from "react";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import { Link } from "@reach/router";

export default function LinkButton(props) {
  return <Button component={Link} {...props} />
}

export function LinkFab(props) {
  return <Fab component={Link} {...props} />
}