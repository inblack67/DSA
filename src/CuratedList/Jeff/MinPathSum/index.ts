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
