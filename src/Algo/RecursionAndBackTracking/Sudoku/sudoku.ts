const isSudokuPositionValid = (
  sudoku: number[][],
  row: number,
  col: number,
  subMatrixOrder: number,
  val: number,
): boolean => {
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

export const solveSudoku = (
  sudoku: number[][],
  row: number,
  col: number,
  subMatrixOrder: number,
): void => {
  if (row === sudoku[0].length) {
    console.log(sudoku);
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

solveSudoku(sudoku, 0, 0, 3);

// const isSudokuPositionValid = (
//   sudoku: number[][],
//   row: number,
//   col: number,
//   subMatrixOrder: number,
//   val: number,
// ): boolean => {
//   // checking in each row
//   for (let i = 0; i < sudoku[0].length; i++) {
//     const el = sudoku[i][col];
//     if (el === val) {
//       return false;
//     }
//   }
//   // checking each col
//   for (let i = 0; i < sudoku[1].length; i++) {
//     const el = sudoku[row][i];
//     if (el === val) {
//       return false;
//     }
//   }

//   const subRow = subMatrixOrder * Math.floor(row / subMatrixOrder);
//   const subCol = subMatrixOrder * Math.floor(col / subMatrixOrder);

//   for (let i = 0; i < subMatrixOrder; i++) {
//     for (let j = 0; j < subMatrixOrder; j++) {
//       const el = sudoku[i + subRow][j + subCol];
//       if (el === val) {
//         return false;
//       }
//     }
//   }

//   return true;
// };

// export const solveSudoku = (
//   sudoku: number[][],
//   row: number,
//   col: number,
//   subMatrixOrder: number,
// ): void => {
//   if (row === sudoku[0].length) {
//     console.log(sudoku);
//     return;
//   }

//   let nrow = 0;
//   let ncol = 0;

//   // explore each col of a particular row
//   if (col === sudoku[1].length - 1) {
//     nrow = row + 1;
//     ncol = 0;
//   } else {
//     nrow = row;
//     ncol = col + 1;
//   }
//   const curr = sudoku[row][col];
//   if (curr !== 0) {
//     solveSudoku(sudoku, nrow, ncol, subMatrixOrder);
//   } else {
//     // considering a particular cell
//     for (let i = 1; i <= 9; i++) {
//       if (isSudokuPositionValid(sudoku, row, col, subMatrixOrder, i)) {
//         sudoku[row][col] = i;
//         solveSudoku(sudoku, nrow, ncol, subMatrixOrder);
//         sudoku[row][col] = 0;
//       }
//     }
//   }
// };

// export const sudoku: number[][] = [
//   [3, 0, 6, 5, 0, 8, 4, 0, 0],
//   [5, 2, 0, 0, 0, 0, 0, 0, 0],
//   [0, 8, 7, 0, 0, 0, 0, 3, 1],
//   [0, 0, 3, 0, 1, 0, 0, 8, 0],
//   [9, 0, 0, 8, 6, 3, 0, 0, 5],
//   [0, 5, 0, 0, 9, 0, 6, 0, 0],
//   [1, 3, 0, 0, 0, 0, 2, 5, 0],
//   [0, 0, 0, 0, 0, 0, 0, 7, 4],
//   [0, 0, 5, 2, 0, 6, 3, 0, 0],
// ];

// // solveSudoku(sudoku, 0, 0, 3);
