import React, { useState, useRef } from "react";
import { styled } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Stack } from "components/layout/Flex";

const Box = styled(Paper)({
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 4,
  flexGrow: 1,
  cursor: "pointer"
});

const ElementSymbol = styled(Typography)({
  fontSize: "1.5rem"
});

const SmallText = styled(Typography)({
  fontSize: ".7vw"
});

const DEFAULT_ZINDEX = 0, DEFAULT_ELEVATION = 0;
const EMPHASIZED_ZINDEX = 1, EMPHASIZED_ELEVATION = 7;
const HOVERED_ZINDEX = 2, HOVERED_ELEVATION = 12;

function getElevation(emphasized, hovered) {
  if (hovered) return { zindex: HOVERED_ZINDEX, elevation: HOVERED_ELEVATION };
  if (emphasized) return { zindex: EMPHASIZED_ZINDEX, elevation: EMPHASIZED_ELEVATION };
  return { zindex: DEFAULT_ZINDEX, elevation: DEFAULT_ELEVATION };
}

export default function Element({ element, emphasized, onClick }) {
  const [hovered, setHovered] = useState(false);
  const boxRef = useRef(null);
  const enter = () => setHovered(true);
  const leave = () => setHovered(false);
  const { elevation, zindex } = getElevation(emphasized, hovered);

  function handleClick() {
    if (onClick) {
      onClick(element, boxRef.current);
    }
  }

  return (
    <Box
      ref={boxRef}
      square
      onMouseEnter={enter}
      onMouseLeave={leave}
      zindex={zindex}
      elevation={elevation}
      onClick={handleClick}
      style={{ zIndex: zindex }}
    >
      <SmallText>{element.number}</SmallText>
      <ElementSymbol>{element.symbol}</ElementSymbol>
      <Stack align="center">
        <SmallText>{element.name}</SmallText>
        <SmallText>{+element.atomic_mass.toFixed(4)}</SmallText>
      </Stack>
    </Box>
  )
}