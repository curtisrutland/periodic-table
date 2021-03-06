import React, { useState } from "react";
import * as periodic from "api/periodic";
import Grid from "components/layout/Grid";
import SearchBox from "./SearchBox";
import Element from "./Element";
import ElementInfoWindow from "./ElementInfoWindow";

const TRANSITION_TIMEOUT = 150;

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
  const [selected, setSelected] = useState({ anchor: null });

  function clearSelected() {
    setSelected({ ...selected, anchor: null });
  }

  function onSelected(anchor, element) {
    setSelected({ anchor, element });
  }

  function handleElementClick(element, target) {
    console.log(element);
    if (selected.anchor == null) {
      onSelected(target, element);
    }
    else if (selected.element.number !== element.number) {
      clearSelected();
      setTimeout(() => onSelected(target, element), TRANSITION_TIMEOUT + 10);
    }
    else {
      clearSelected();
    }
  }

  function handleElementInfoClose() {
    clearSelected();
  }

  return (
    <>
      <SearchBox value={searchText} onChange={setSearchText} />
      <Grid rows={periodic.Y_MAX} cols={periodic.X_MAX}>
        {periodic.elementIndexes.map(idx => mapElements(idx, handleElementClick, searchText))}
        <ElementInfoWindow onClose={handleElementInfoClose} {...selected} transitionTimeout={TRANSITION_TIMEOUT} />
      </Grid>
    </>
  )
}