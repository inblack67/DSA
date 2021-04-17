const visited = new Map<string, boolean>();
const floodFilling = (
  row: number,
  col: number,
  maze: number[][],
  ans: string,
): void => {
  if (
    row < 0 ||
    col < 0 ||
    row === maze[0].length ||
    col === maze[1].length ||
    maze[row][col] === 1 ||
    visited.get(`${row}${col}`) === true
  ) {
    return;
  }

  if (row === maze[0].length - 1 && col === maze[1].length - 1) {
    console.log(ans);
    return;
  }

  visited.set(`${row}${col}`, true);

  floodFilling(row + 1, col, maze, ans + 'd');
  floodFilling(row - 1, col, maze, ans + 't');
  floodFilling(row, col + 1, maze, ans + 'r');
  floodFilling(row, col - 1, maze, ans + 'l');
};

floodFilling(
  0,
  0,
  [
    [0, 0, 0],
    [1, 0, 1],
    [0, 0, 0],
  ],
  '',
);
