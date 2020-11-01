import styled from "styled-components";
import React from "react";

import { Box } from "../utils/components/Box";

const Grid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(4, 50px);
  grid-template-rows: repeat(4, 50px);
  justify-items: center;
  align-items: center;
`;

const Cell = (props) => (
  <Box
    border="1px solid #000"
    display="flex"
    alignItems="center"
    justifyContent="center"
    width="100%"
    height="100%"
    {...props}
  />
);

export const Grid2048 = ({ gameState, ...props }) => {
  return (
    <Grid {...props}>
      {gameState.map((row, i) =>
        row.map((cell, j) => <Cell key={`${i}_${j}`}>{cell || ""}</Cell>)
      )}
    </Grid>
  );
};

Grid2048.displayName = "Grid2048";
