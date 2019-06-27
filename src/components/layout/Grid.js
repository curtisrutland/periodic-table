import { styled } from "@material-ui/styles";

const Grid = styled("div")(({rows, cols}) => ({
  flexGrow: 1,
  display: "grid",
  gridTemplate: `repeat(${rows}, 1fr) / repeat(${cols}, 1fr)`
})); 

export default Grid;