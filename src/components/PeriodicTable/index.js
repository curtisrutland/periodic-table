import React from "react";
import * as periodic from "api/periodic";
import Grid from "components/layout/Grid";
import Element from "./Element";

function mapElements({ x, y, key }) {
  const element = periodic.getElement(x, y);
  if (!element) {
    return <div key={key}/>;
  } else {
    return <Element element={element} key={key} onClick={(e, el) => console.log(e.target, el)} />
  }
}

export default function PeriodicTable() {
  return (
    <Grid rows={periodic.Y_MAX} cols={periodic.X_MAX}>
      {periodic.elementIndexes.map(mapElements)}
    </Grid>
  )
}