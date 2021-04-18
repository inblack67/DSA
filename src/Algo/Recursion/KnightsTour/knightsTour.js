const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const getChess = (order) => {
  const chess = Array(order)
    .fill(null)
    .map(() => Array(order).fill(0));
  return chess;
};

const displayChess = (chess, order) => {
  for (let i = 0; i < order; i++) {
    for (let j = 0; j < order; j++) {
      const el = chess[i][j];
      process.stdout.write(el.toString() + ' ');
    }
    console.log();
  }
  console.log();
};

const knightsTour = (chess, order, row, col, move) => {
  if (
    row < 0 ||
    col < 0 ||
    row >= order ||
    col >= order ||
    chess[row][col] > 0
  ) {
    return;
  } else if (move === order * order) {
    chess[row][col] = move;
    displayChess(chess, order);
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

const main = () => {
  const order = readMe();
  const row = readMe();
  const col = readMe();
  const chess = getChess(+order);
  knightsTour(chess, +order, +row, +col, 1);
};

main();
