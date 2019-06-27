import React, { useState } from "react";
import { styled } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Stack } from "components/layout/Flex";

const Box = styled(Paper)(({ zindex }) => ({
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 4,
  zIndex: zindex,
  flexGrow: 1,
  cursor: "pointer"
}));

const ElementSymbol = styled(Typography)({
  fontSize: "2vw"
});

const SmallText = styled(Typography)({
  fontSize: ".7vw"
});

const DEFAULT_ZINDEX = 0, DEFAULT_ELEVATION = 0;
const HOVERED_ZINDEX = 1, HOVERED_ELEVATION = 10;

export default function Element({ element, emphasized, onClick }) {
  const [hovered, setHovered] = useState(false);
  const enter = () => setHovered(true);
  const leave = () => setHovered(false);
  const zindex = (hovered || emphasized) ? HOVERED_ZINDEX : DEFAULT_ZINDEX;
  const elevation = (hovered || emphasized) ? HOVERED_ELEVATION : DEFAULT_ELEVATION;

  function handleClick(event) {
    if (onClick)
      onClick(event, element);
  }

  return (
    <Box
      square
      onMouseEnter={enter}
      onMouseLeave={leave}
      zindex={zindex}
      elevation={elevation}
      onClick={handleClick}
    >
      <SmallText>{element.number}</SmallText>
      <ElementSymbol>{element.symbol}</ElementSymbol>
      <Stack align="center">
        <SmallText>{element.name}</SmallText>
        <SmallText>{element.atomic_mass}</SmallText>
      </Stack>
    </Box>
  )
}