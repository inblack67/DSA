const isValid = (sudoku: string[][], row: number, col: number): boolean => {
  const el = sudoku[row][col];
  for (let i = 0; i < sudoku[0].length && i !== col; i++) {
    const element = sudoku[row][i];
    if (el === element) {
      return false;
    }
  }
  for (let i = 0; i < sudoku.length && i !== row; i++) {
    const element = sudoku[i][col];
    if (el === element) {
      return false;
    }
  }
  const rowCorner = Math.floor(row / 3) * 3;
  const colCorner = Math.floor(col / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const subMatrixRow = rowCorner + i;
      const subMatrixCol = colCorner + j;
      const element = sudoku[subMatrixRow][subMatrixCol];
      if (subMatrixCol !== col && subMatrixRow !== row && el === element) {
        return false;
      }
    }
  }
  return true;
};

let ans = true;
const isMySudokuValid = (
  sudoku: string[][],
  row: number = 0,
  col: number = 0,
): boolean => {
  if (sudoku.length === row) {
    return ans;
  }
  let nextRow: number = 0;
  let nextCol: number = 0;
  if (col === sudoku[0].length - 1) {
    nextRow = row + 1;
    nextCol = 0;
  } else {
    nextRow = row;
    nextCol = col + 1;
  }
  if (sudoku[row][col] === '.') {
    isMySudokuValid(sudoku, nextRow, nextCol);
  } else {
    if (isValid(sudoku, row, col)) {
      isMySudokuValid(sudoku, nextRow, nextCol);
    } else {
      ans = false;
    }
  }
  return ans;
};

const mySudoku: string[][] = [
  ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

// const mySudoku = [
//   ['.', '.', '4', '.', '.', '.', '6', '3', '.'],
//   ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
//   ['5', '.', '.', '.', '.', '.', '.', '9', '.'],
//   ['.', '.', '.', '5', '6', '.', '.', '.', '.'],
//   ['4', '.', '3', '.', '.', '.', '.', '.', '1'],
//   ['.', '.', '.', '7', '.', '.', '.', '.', '.'],
//   ['.', '.', '.', '5', '.', '.', '.', '.', '.'],
//   ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
//   ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
// ];

console.log(isMySudokuValid(mySudoku));

const minimumPathSum = (grid: number[][]): number => {
  const dp = new Array(grid.length)
    .fill(null)
    .map(() => new Array(grid[0].length).fill(0));

  for (let i = grid.length - 1; i >= 0; i--) {
    for (let j = grid[0].length - 1; j >= 0; j--) {
      const el = grid[i][j];
      if (i === grid.length - 1 && j === grid[0].length - 1) {
        dp[i][j] = el;
      } else if (i === grid.length - 1) {
        dp[i][j] = el + dp[i][j + 1];
      } else if (j === grid[0].length - 1) {
        dp[i][j] = el + dp[i + 1][j];
      } else {
        dp[i][j] = el + Math.min(dp[i + 1][j], dp[i][j + 1]);
      }
    }
  }

  return dp[0][0];
};

console.log(
  minimumPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ]),
);

console.log(
  minimumPathSum([
    [1, 2, 3],
    [4, 5, 6],
  ]),
);
