import { useCallback, useEffect, useReducer } from "react";

const randInt = (max, min = 0) => Math.floor(Math.random() * (max - min) + min);
const randChoice = (arr) => arr[randInt(arr.length)];

class Game {
  constructor({ values, history = [], continuing = false }) {
    this.history = history;
    this.loss = false;
    this.win = false;
    this.continuing = continuing;
    if (values) {
      this.values = values;
      this.checkLoss();
    } else {
      this.values = this.emptyValues();
      this.randomFill();
    }
  }

  getRow = (idx) => {
    return [...this.values[idx]];
  };

  getEmptyCells = () => {
    return this.getRows().reduce((arr, row, i) => {
      row.reduce((arr, cell, j) => {
        if (cell == null) {
          arr.push([i, j]);
        }
        return arr;
      }, arr);
      return arr;
    }, []);
  };

  randCellValue = () => {
    return Math.random() < 0.75 ? 1 : 2;
  };

  randomFill = (direction) => {
    let emptyCells = this.getEmptyCells();
    switch (direction) {
      case "left": {
        emptyCells = emptyCells.filter(([i, j]) => j === 3);
        break;
      }
      case "up": {
        emptyCells = emptyCells.filter(([i, j]) => i === 3);
        break;
      }
      case "right": {
        emptyCells = emptyCells.filter(([i, j]) => j === 0);
        break;
      }
      case "down": {
        emptyCells = emptyCells.filter(([i, j]) => i === 0);
        break;
      }
      default:
        break;
    }
    const [i, j] = randChoice(emptyCells);
    this.values[i][j] = this.randCellValue();
  };

  // Return true if loss
  checkLoss = () => {
    this.loss = this.getRows().every((row) => row.every((elt) => elt != null));
    this.win = this.getRows().some((row) =>
      row.some((elt) => elt && elt >= 2048)
    );
  };

  getColumn = (idx) => {
    return [
      this.values[0][idx],
      this.values[1][idx],
      this.values[2][idx],
      this.values[3][idx],
    ];
  };

  emptyValues = () => {
    return [
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
    ];
  };

  setRows = (rows) => {
    this.values = rows;
  };

  setColumns = (columns) => {
    this.values = this.emptyValues();
    columns.forEach((column, j) => {
      column.forEach((elt, i) => {
        this.values[i][j] = elt;
      });
    });
  };

  // move the elements of the line to the start of the line
  // return true if elements where moved
  moveLine = (line) => {
    let idx = 0;
    let justMerged = false;
    return line
      .reduce(
        (newLine, elt) => {
          if (elt != null) {
            if (idx > 0 && newLine[idx - 1] === elt && !justMerged) {
              newLine[idx - 1] = 2 * elt;
              justMerged = true;
            } else {
              newLine[idx++] = elt;
              justMerged = false;
            }
          }
          return newLine;
        },
        [null, null, null, null]
      )
      .slice(0, 4);
  };

  getRows = () => {
    return this.values;
  };

  getColumns = () => {
    return [0, 1, 2, 3].map(this.getColumn);
  };

  move = (direction) => {
    if (this.loss) {
      return;
    }
    this.history = [this.values, ...this.history];
    switch (direction) {
      case "left": {
        this.setRows(this.getRows().map(this.moveLine));
        break;
      }
      case "right": {
        this.setRows(
          this.getRows().map((row) => this.moveLine(row.reverse()).reverse())
        );
        break;
      }
      case "up": {
        this.setColumns(this.getColumns().map(this.moveLine));
        break;
      }
      case "down": {
        this.setColumns(
          this.getColumns().map((line) =>
            this.moveLine(line.reverse()).reverse()
          )
        );
        break;
      }
      default:
        throw new Error(`unknown direction: '${direction}'`);
    }
    this.randomFill(direction);
    this.checkLoss();
  };

  getState = () => {
    return {
      values: this.values,
      loss: this.loss,
      win: this.win,
      continuing: this.continuing,
      history: this.history,
    };
  };

  cancel = (quantity) => {
    if (quantity > this.history.length) {
      throw new Error(
        `Cannot cancel ${quantity} moves, only ${this.history.length} in history`
      );
    }
    if (quantity < 1) {
      return;
    }
    const [values, ...history] = this.history.slice(quantity - 1);
    this.values = values;
    this.history = history;
    this.checkLoss();
  };
}

function reducer(state, action) {
  switch (action.type) {
    case "left":
    case "up":
    case "right":
    case "down": {
      const { values, history, continuing } = state;
      const game = new Game({ values, history, continuing });
      game.move(action.type);
      return game.getState();
    }
    case "cancel": {
      if (!state.history?.length) {
        return state;
      }
      const { values, history, continuing } = state;
      const game = new Game({ values, history, continuing });
      game.cancel(action.quantity ?? 1);
      return game.getState();
    }
    case "reset":
      return getInitialState();
    case "continue":
      return { ...state, continuing: true };
    default:
      state;
  }
}

const LEFT_KEY = 37;
const UP_KEY = 38;
const RIGHT_KEY = 39;
const DOWN_KEY = 40;
const _handleKeyDown = (dispatch) => (event) => {
  switch (event.keyCode) {
    case LEFT_KEY:
      dispatch({ type: "left" });
      break;
    case UP_KEY:
      dispatch({ type: "up" });
      break;
    case RIGHT_KEY:
      dispatch({ type: "right" });
      break;
    case DOWN_KEY:
      dispatch({ type: "down" });
      break;
    default:
      break;
  }
};

const getInitialState = (values) => {
  const game = new Game({ values });
  return game.getState();
};

export const use2048 = ({ initialValues }) => {
  const [state, dispatch] = useReducer(reducer, getInitialState(initialValues));

  useEffect(() => {
    const handler = _handleKeyDown(dispatch);
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [dispatch]);

  const cancelLastAction = useCallback(
    (quantity = 1) => {
      dispatch({ type: "cancel", quantity });
    },
    [dispatch]
  );

  const resetGame = useCallback(
    (quantity = 1) => {
      dispatch({ type: "reset" });
    },
    [dispatch]
  );

  const continueGame = useCallback(() => {
    dispatch({ type: "continue" });
  }, [dispatch]);

  return {
    gameState: state.values,
    loss: state.loss,
    win: state.win,
    continuing: state.continuing,
    cancelLastAction,
    canCancel: !!state.history?.length,
    continueGame,
    resetGame,
  };
};
