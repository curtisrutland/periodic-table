import React, { useState } from "react";
import * as periodic from "api/periodic";
import Grid from "components/layout/Grid";
import SearchBox from "./SearchBox";
import Element from "./Element";

function mapElements({ x, y, key }, onClick, searchText) {
  const element = periodic.getElement(x, y);
  if (!element) {
    return <div key={key} />;
  } else {
    return <Element
      emphasized={periodic.match(element, searchText)}
      element={element}
      key={key}
      onClick={onClick} />
  }
}

export default function PeriodicTable() {
  const [searchText, setSearchText] = useState("");

  function handleElementClick(event, element) {
    console.log(event.target, element)
  }

  return (
    <>
      <SearchBox value={searchText} onChange={setSearchText} />
      <Grid rows={periodic.Y_MAX} cols={periodic.X_MAX}>
        {periodic.elementIndexes.map(idx => mapElements(idx, handleElementClick, searchText))}
      </Grid>
    </>
  )
}