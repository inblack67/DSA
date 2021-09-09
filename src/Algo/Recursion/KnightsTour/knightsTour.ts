const getChess = (order: number): number[][] => {
  const chess = Array(order)
    .fill(null)
    .map(() => Array(order).fill(0));
  return chess;
};

const knightsTour = (
  chess: number[][],
  order: number,
  row: number,
  col: number,
  move: number,
): void => {
  if (
    row < 0 ||
    col < 0 ||
    row >= order ||
    col >= order ||
    chess[row][col] > 0 // has to be last => row & col need to be validated first
  ) {
    return;
  } else if (move === order * order) {
    chess[row][col] = move;
    console.log(chess);
    chess[row][col] = 0;
    return;
  }

  chess[row][col] = move;
  knightsTour(chess, order, row - 2, col + 1, move + 1);
  knightsTour(chess, order, row - 1, col + 2, move + 1);
  knightsTour(chess, order, row + 1, col + 2, move + 1);
  knightsTour(chess, order, row + 2, col + 1, move + 1);
  knightsTour(chess, order, row + 2, col - 1, move + 1);
  knightsTour(chess, order, row + 1, col - 2, move + 1);
  knightsTour(chess, order, row - 1, col - 2, move + 1);
  knightsTour(chess, order, row - 2, col - 1, move + 1);
  chess[row][col] = 0;
};

const chess = getChess(5);
knightsTour(chess, chess.length, 2, 0, 1);
