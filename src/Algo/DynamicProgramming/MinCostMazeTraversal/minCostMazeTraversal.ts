function minPathSum(grid: number[][]): number {
  // number of rows => dp.length
  // number of cols = > dp[0].length
  const dp = new Array(grid.length)
    .fill(null)
    .map(() => new Array(grid[0].length).fill(0));

  for (let row = dp.length - 1; row >= 0; row--) {
    for (let col = dp[0].length - 1; col >= 0; col--) {
      if (row === dp.length - 1 && col === dp[0].length - 1) {
        // last cell
        dp[row][col] = grid[row][col];
      } else if (row === dp.length - 1) {
        // last row
        dp[row][col] = grid[row][col] + dp[row][col + 1];
      } else if (col === dp[0].length - 1) {
        // last col
        dp[row][col] = grid[row][col] + dp[row + 1][col];
      } else {
        // rest
        dp[row][col] =
          grid[row][col] + Math.min(dp[row][col + 1], dp[row + 1][col]);
      }
    }
  }
  return dp[0][0];
}

console.log(
  minPathSum([
    [1, 2, 3],
    [4, 5, 6],
  ]),
); // 12
console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ]),
); // 7
