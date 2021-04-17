const floodFilling = (
  row: number,
  col: number,
  maze: number[][],
  ans: string,
  visited: Map<string, boolean>,
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

  floodFilling(row + 1, col, maze, ans + 'd', visited);
  floodFilling(row - 1, col, maze, ans + 't', visited);
  floodFilling(row, col + 1, maze, ans + 'r', visited);
  floodFilling(row, col - 1, maze, ans + 'l', visited);
};

const visited = new Map<string, boolean>();
const maze = [
  [0, 0, 0],
  [1, 0, 1],
  [0, 0, 0],
];

floodFilling(0, 0, maze, '', visited);
