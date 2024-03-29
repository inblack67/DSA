const climbStairsWithMinMoves = (jumps: number[]) => {
  const dp = new Array(jumps.length + 1).fill(null);
  dp[dp.length - 1] = 0;
  for (let i = dp.length - 2; i >= 0; i--) {
    const jumpsAllowed = jumps[i];
    if (jumpsAllowed > 0) {
      let min = Number.MAX_SAFE_INTEGER;
      for (let j = 1; j <= jumpsAllowed && i + j < dp.length; j++) {
        const el = dp[i + j];
        if (el !== null) {
          min = Math.min(min, el);
        }
      }
      // stop 0 from interfering the min comparison
      if (min !== Number.MAX_SAFE_INTEGER) {
        dp[i] = min + 1;
      }
    }
  }

  console.log(dp[0]);
};

climbStairsWithMinMoves([3, 3, 0, 2, 1, 2, 4, 2, 0, 0]);
