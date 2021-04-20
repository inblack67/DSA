const climbStairsWithJumps = (jumps: number[]): void => {
  const dp = new Array(jumps.length + 1).fill(0);
  dp[dp.length - 1] = 1;
  for (let i = dp.length - 2; i >= 0; i--) {
    for (let j = 1; j <= jumps[i] && i + j < dp.length; j++) {
      dp[i] += dp[i + j];
    }
  }
  console.log(dp[0]); // number of diff paths from bottom to top
};

climbStairsWithJumps([3, 3, 0, 2, 3]);
