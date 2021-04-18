const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const isQueenSafe = (order, chess, row, col) => {
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

const getChess22 = (order) => {
  const chess = Array(order)
    .fill(null)
    .map(() => Array(order).fill(0));
  return chess;
};

const nQueensProblem = (chess, order, row, ans) => {
  if (row === order) {
    console.log(ans + '.');
    return;
  }
  for (let col = 0; col < order; col++) {
    // fill queen only if it's safe
    if (isQueenSafe(order, chess, row, col)) {
      chess[row][col] = 1; // queen established at each col of the row
      nQueensProblem(chess, order, row + 1, ans + `${row}-${col}, `);
      chess[row][col] = 0;
    }
  }
};

const main = () => {
  const order = readMe();
  const chess22 = getChess22(+order);
  nQueensProblem(chess22, +order, 0, '');
};

main();
