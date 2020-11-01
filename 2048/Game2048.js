import React from "react";

import { use2048 } from "./use2048";
import { Grid2048 } from "./Grid2048";

export const Game2048 = (props) => {
  const initialValues = [
    [null, null, null, null],
    [null, null, 1, null],
    [null, 2, 2, 4],
    [null, 4, 8, 16],
  ];

  const { gameState, cancelLastAction, canCancel } = use2048({ initialValues });
  return (
    <div>
      <Grid2048 gameState={gameState} />
      {canCancel && <button onClick={() => cancelLastAction()}>Cancel</button>}
    </div>
  );
};

Game2048.displayName = "Game2048";
