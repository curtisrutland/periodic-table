import { styled } from "@material-ui/styles";

export const Stack = styled("div")(({ align = "unset" }) => ({
  display: "flex",
  flexFlow: "column nowrap",
  alignItems: align
}));

export const Row = styled("div")({
  display: "flex",
  flexFlow: "row nowrap"
});