const paintHouseMinCost = (rates: number[][]) => {
  const dp: number[][] = new Array(rates.length)
    .fill(null)
    .map(() => new Array(rates[0].length).fill(0));

  for (let row = 0; row < dp.length; row++) {
    for (let col = 0; col < dp[0].length; col++) {
      if (row === 0) {
        dp[row][col] = rates[row][col];
      } else {
        dp[row][col] = rates[row][col];
        if (col === 0) {
          dp[row][col] += Math.min(dp[row - 1][col + 1], dp[row - 1][col + 2]);
        } else if (col === 1) {
          dp[row][col] += Math.min(dp[row - 1][col + 1], dp[row - 1][col - 1]);
        } else {
          dp[row][col] += Math.min(dp[row - 1][col - 1], dp[row - 1][col - 2]);
        }
      }
    }
  }

  const res = Math.min(...dp[rates.length - 1]);
  console.log(res);
};

paintHouseMinCost([
  [1, 5, 7],
  [5, 8, 4],
  [3, 2, 9],
  [1, 2, 4],
]);
