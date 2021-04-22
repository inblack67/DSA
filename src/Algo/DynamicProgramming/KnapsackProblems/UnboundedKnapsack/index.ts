const solveUnboundedKnapsack = (
  profits: number[],
  weights: number[],
  capacity: number,
): void => {
  const dp = new Array(capacity + 1).fill(0);
  dp[0] = 0;
  for (let bagSize = 1; bagSize < dp.length; bagSize++) {
    for (let objIndex = 0; objIndex < weights.length; objIndex++) {
      const objectSize = weights[objIndex];
      const objectProfit = profits[objIndex];
      if (bagSize >= objectSize) {
        const curr = dp[bagSize];
        const next = objectProfit + dp[bagSize - objectSize];
        if (next > curr) {
          dp[bagSize] = next;
        }
      }
    }
  }
  console.log(dp[dp.length-1]);
};

solveUnboundedKnapsack([15, 14, 10, 45, 30], [2, 5, 1, 3, 4], 7);
