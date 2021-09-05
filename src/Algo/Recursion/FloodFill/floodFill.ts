const visitedMe = new Map<string, boolean>();

const myFloodFill = (
  path: number[][],
  visited: Map<string, boolean>,
  row: number = 0,
  col: number = 0,
  ans: string = '',
) => {
  if (
    row < 0 ||
    row === path.length ||
    col < 0 ||
    col === path[0].length ||
    path[row][col] === 1 ||
    visited.get(`${row}-${col}`)
  ) {
    return;
  }
  if (row === path.length - 1 && col === path[0].length - 1) {
    console.log(ans);
    return;
  }

  visited.set(`${row}-${col}`, true);

  myFloodFill(path, visited, row, col + 1, ans + 'r');
  myFloodFill(path, visited, row + 1, col, ans + 'd');
  myFloodFill(path, visited, row, col - 1, ans + 'l');
  myFloodFill(path, visited, row - 1, col, ans + 't');
};

myFloodFill(
  [
    [0, 0, 0],
    [1, 0, 1],
    [0, 0, 0],
  ],
  visitedMe,
);
