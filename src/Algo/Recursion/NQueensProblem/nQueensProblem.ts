const isQueenSafe = (
  order: number,
  chess: number[][],
  row: number,
  col: number,
): boolean => {
  // check above diagonally left and right
  // and check above vertically
  // bottom has not arrived yet so no need

  for (let i = row - 1, j = col; i >= 0; i--) {
    // vertically up
    if (chess[i][j] === 1) {
      return false;
    }
  }

  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    // left diagonally
    if (chess[i][j] === 1) {
      return false;
    }
  }

  for (let i = row - 1, j = col + 1; i >= 0 && j < order; i--, j++) {
    // right diagonally
    if (chess[i][j] === 1) {
      return false;
    }
  }

  return true;
};

const getChess2 = (order: number): number[][] => {
  const chess = Array(order)
    .fill(null)
    .map(() => Array(order).fill(0));
  return chess;
};

const nQueensProblem = (order: number, row: number, ans: string): void => {
  const chess: number[][] = getChess2(order);
  if (row === order) {
    console.log(ans);
    return;
  }
  for (let col = 0; col < order; col++) {
    // fill queen only if it's safe
    if (isQueenSafe(order, chess, row, col)) {
      chess[row][col] = 1; // queen established at each col of the row
      nQueensProblem(order, row + 1, ans + `${row}-${col}, `);
      chess[row][col] = 0;
    }
  }
};

nQueensProblem(4, 0, '');
