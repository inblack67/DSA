import {
  solveSudoku,
  sudoku,
} from './Algo/RecursionAndBackTracking/Sudoku/sudoku';

const main = async () => {
  solveSudoku(sudoku, 0, 0, 3);
};

main().catch((err) => console.error(err));
