import React from "react";

import { use2048 } from "./use2048";
import { Grid2048 } from "./Grid2048";

export const Game2048 = () => {
  const {
    gameState,
    cancelLastAction,
    canCancel,
    loss,
    win,
    continuing,
    continueGame,
    resetGame,
  } = use2048();
  return (
    <div>
      {gameState && <Grid2048 gameState={gameState} />}
      {canCancel && <button onClick={() => cancelLastAction()}>Cancel</button>}
      {loss ? (
        <div>
          <h1>You lost</h1>
          <button onClick={() => resetGame()}>try again!</button>
        </div>
      ) : (
        <button onClick={() => resetGame()}>restart</button>
      )}
      {win && !continuing && (
        <div>
          <h1>You won</h1>
          <button onClick={() => continueGame()}>continue!</button>
        </div>
      )}
    </div>
  );
};

Game2048.displayName = "Game2048";
