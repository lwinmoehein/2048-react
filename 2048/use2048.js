import { useCallback, useEffect, useReducer } from "react";

class Game {
  constructor(values, history = []) {
    this.loss = false;
    this.history = history;
    if (values) {
      this.values = values;
    } else {
      this.values = this.emptyValues();
    }
  }

  getRow = (idx) => {
    return [...this.values[idx]];
  };

  // Return true if loss
  checkLoss = () => {
    this.loss = this.getRows().some((row) => !row.some((elt) => elt == null));
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
    return line
      .reduce(
        (newLine, elt) => {
          if (elt != null) {
            newLine[idx++] = elt;
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
    this.checkLoss();
  };

  getState = () => {
    return { values: this.values, loss: this.loss, history: this.history };
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
      const game = new Game(state.values, state.history);
      game.move(action.type);
      return game.getState();
    }
    case "cancel": {
      if (!state.history?.length) {
        return state;
      }
      const game = new Game(state.values, state.history);
      game.cancel(action.quantity ?? 1);
      return game.getState();
    }
    default: {
      if (state) {
        return state;
      }
      const game = new Game();
      return game.getState();
    }
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

export const use2048 = ({ initialValues }) => {
  const [state, dispatch] = useReducer(reducer, { values: initialValues });

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

  return {
    gameState: state.values,
    cancelLastAction,
    canCancel: !!state.history?.length,
  };
};
