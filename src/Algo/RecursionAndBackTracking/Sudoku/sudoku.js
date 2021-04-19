const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const isSudokuPositionValid = (sudoku, row, col, subMatrixOrder, val) => {
  for (let i = 0; i < sudoku[0].length; i++) {
    const el = sudoku[i][col];
    if (el === val) {
      return false;
    }
  }
  for (let i = 0; i < sudoku[1].length; i++) {
    const el = sudoku[row][i];
    if (el === val) {
      return false;
    }
  }

  const subrow = subMatrixOrder * Math.floor(row / subMatrixOrder);
  const subcol = subMatrixOrder * Math.floor(col / subMatrixOrder);

  for (let i = 0; i < subMatrixOrder; i++) {
    for (let j = 0; j < subMatrixOrder; j++) {
      const el = sudoku[i + subrow][j + subcol];
      if (el === val) {
        return false;
      }
    }
  }
  return true;
};

const displaySudoku = (sudoku) => {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const el = sudoku[i][j];
      process.stdout.write(el.toString() + ' ');
    }
    console.log();
  }
};

const solveSudoku = (sudoku, row, col, subMatrixOrder) => {
  if (row === sudoku[0].length) {
    displaySudoku(sudoku);
    return;
  }

  // next rows and cols
  let nrow = 0;
  let ncol = 0;

  // at the last col
  if (col === sudoku[1].length - 1) {
    nrow = row + 1;
    ncol = 0;
  } else {
    nrow = row;
    ncol = col + 1;
  }

  const curr = sudoku[row][col];
  if (curr) {
    solveSudoku(sudoku, nrow, ncol, subMatrixOrder);
  } else {
    for (let i = 1; i <= 9; i++) {
      if (isSudokuPositionValid(sudoku, row, col, subMatrixOrder, i)) {
        sudoku[row][col] = i;
        solveSudoku(sudoku, nrow, ncol, subMatrixOrder);
        sudoku[row][col] = 0;
      }
    }
  }
};

const getSudoku = (order) => {
  const sudoku = Array(order)
    .fill(null)
    .map(() => Array(order).fill(0));
  return sudoku;
};

const main = () => {
  const sudoku = getSudoku(9);
  for (let i = 0; i < 9; i++) {
    const row = readMe().split(' ');
    for (let j = 0; j < 9; j++) {
      const el = row[j];
      sudoku[i][j] = +el;
    }
  }
  solveSudoku(sudoku, 0, 0, 3);
};

main();
