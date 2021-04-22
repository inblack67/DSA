const solveFractionalKnapsack = (
  profits: number[],
  weights: number[],
  capacity: number,
): void => {
  const dp: number[][] = new Array(weights.length + 1)
    .fill(null)
    .map(() => new Array(capacity + 1).fill(0));

  for (let row = 0; row < dp.length; row++) {
    for (let col = 0; col < dp[0].length; col++) {
      if (row === 0 || col === 0) {
        dp[row][col] = 0;
      } else {
        const currentWeight = weights[row - 1];
        const currentProfit = profits[row - 1];
        const prev = dp[row - 1][col];
        if (col >= currentWeight) {
          const totalTillNow = currentProfit + dp[row - 1][col - currentWeight];
          const max = Math.max(prev, totalTillNow);
          dp[row][col] = max;
        } else {
          dp[row][col] = prev; // curr is not eligible take the prev one
        }
      }
    }
  }
  console.log(dp[dp.length - 1][dp[0].length - 1]);
};

solveFractionalKnapsack([15, 14, 10, 45, 30], [2, 5, 1, 3, 4], 7);
