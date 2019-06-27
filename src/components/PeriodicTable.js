import React, { useState } from "react";
import * as periodic from "api/periodic";
import Grid from "components/layout/Grid";
import SearchBox from "./SearchBox";
import Element from "./Element";
import ElementInfo from "./ElementInfo";

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

  function handleElementClick(event, element) {
    console.debug(element);
    let target = event.target;
    if (selected.anchor == null) {
      onSelected(target, element);
      console.debug("anchor was null, setting.")
    }
    else if (selected.element.number !== element.number) {
      clearSelected();
      setTimeout(() => {
        onSelected(target, element);
      }, TRANSITION_TIMEOUT + 10);
      console.debug("new element clicked");
    }
    else {
      clearSelected();
      console.debug("same element clicked. clearing");
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
        <ElementInfo onClose={handleElementInfoClose} {...selected} transitionTimeout={TRANSITION_TIMEOUT} />
      </Grid>
    </>
  )
}