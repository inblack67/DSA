const isMySudokuValid = (
  sudoku: number[][],
  value: number,
  row: number,
  col: number,
): boolean => {
  for (let i = 0; i < sudoku[0].length; i++) {
    const el = sudoku[row][i];
    if (el === value) {
      return false;
    }
  }
  for (let i = 0; i < sudoku.length; i++) {
    const el = sudoku[i][col];
    if (el === value) {
      return false;
    }
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const el = sudoku[i][j];
      if (el === value) {
        return false;
      }
    }
  }
  return true;
};

export const mySudoku = (sudoku: number[][], row = 0, col = 0): void => {
  if (row === sudoku.length) {
    console.log(sudoku);
    return;
  }
  let nextRow = 0;
  let nextCol = 0;
  if (col === sudoku[0].length - 1) {
    nextRow = row + 1;
    nextCol = 0;
  } else {
    nextRow = row;
    nextCol = col + 1;
  }

  if (sudoku[row][col]) {
    // move on
    mySudoku(sudoku, nextRow, nextCol);
  } else {
    for (let i = 1; i <= 9; i++) {
      if (isMySudokuValid(sudoku, i, row, col)) {
        sudoku[row][col] = i;
        mySudoku(sudoku, nextRow, nextCol);
        sudoku[row][col] = 0;
      }
    }
  }
};

export const sudoku: number[][] = [
  [3, 0, 6, 5, 0, 8, 4, 0, 0],
  [5, 2, 0, 0, 0, 0, 0, 0, 0],
  [0, 8, 7, 0, 0, 0, 0, 3, 1],
  [0, 0, 3, 0, 1, 0, 0, 8, 0],
  [9, 0, 0, 8, 6, 3, 0, 0, 5],
  [0, 5, 0, 0, 9, 0, 6, 0, 0],
  [1, 3, 0, 0, 0, 0, 2, 5, 0],
  [0, 0, 0, 0, 0, 0, 0, 7, 4],
  [0, 0, 5, 2, 0, 6, 3, 0, 0],
];
