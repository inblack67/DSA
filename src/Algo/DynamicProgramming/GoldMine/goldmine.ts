const get2DArray = (rows: number, cols: number, fillZeroes = true) => {
  const arr: number[][] = new Array(rows)
    .fill(null)
    .map(() => new Array(cols).fill(fillZeroes ? 0 : null));
  return arr;
};

export const maxGold = (mine: number[][]): void => {
  const dp = get2DArray(mine.length, mine[0].length);
  for (let col = mine[0].length - 1; col >= 0; col--) {
    for (let row = mine.length - 1; row >= 0; row--) {
      let maxGold = 0;
      if (col === mine[0].length - 1) {
        // last col
        maxGold = 0;
        dp[row][col] = maxGold + mine[row][col];
      } else if (row === 0) {
        // first row
        maxGold = Math.max(dp[row + 1][col + 1], dp[row][col + 1]);
        dp[row][col] = maxGold + mine[row][col];
      } else if (row === mine.length - 1) {
        // last row
        maxGold = Math.max(dp[row][col + 1], dp[row - 1][col + 1]);
        dp[row][col] = maxGold + mine[row][col];
      } else {
        // rest
        maxGold = Math.max(
          dp[row + 1][col + 1],
          dp[row][col + 1],
          dp[row - 1][col + 1],
        );
        dp[row][col] = maxGold + mine[row][col];
      }
    }
  }
  console.log(dp)
  let max = 0;
  for (let row = 0; row < dp.length - 1; row++) {
    const el = dp[row][0];
    if (el > max) {
      max = el;
    }
  }
  console.log(max);
};

maxGold([
  [0, 1, 4, 2, 8, 2],
  [4, 3, 6, 5, 0, 4],
  [1, 2, 4, 1, 4, 6],
  [2, 0, 7, 3, 2, 2],
  [3, 1, 5, 9, 2, 4],
  [2, 7, 0, 8, 5, 1],
]);
