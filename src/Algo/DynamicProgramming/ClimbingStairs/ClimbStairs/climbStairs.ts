const climbStairsMemo = new Map<number, number>();
const climbStairsMemoized = (stairs: number): number => {
  if (stairs === 0) {
    return 1;
  } else if (stairs < 0) {
    return 0;
  }

  const query = climbStairsMemo.get(stairs);
  if (query !== undefined) {
    return query;
  }

  const paths1 = climbStairsMemoized(stairs - 1);
  const paths2 = climbStairsMemoized(stairs - 2);
  const paths3 = climbStairsMemoized(stairs - 3);
  const res = paths1 + paths2 + paths3;
  climbStairsMemo.set(stairs, res);
  return res;
};

// console.log(climbStairsMemoized(4));

// Storage & meaning of cell
// Direction => min to max
// Travel and solve => min to max
const climbStairsTabulation = (stairs: number): number => {
  const dp = new Array(stairs + 1);
  dp[0] = 1; // 1 to 0 => one move
  for (let i = 1; i < dp.length; i++) {
    if (i === 1) {
      dp[i] = dp[i - 1];
    } else if (i === 2) {
      dp[i] = dp[i - 1] + dp[i - 2];
    } else {
      dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
    }
  }
  return dp[dp.length - 1];
};

console.log(climbStairsTabulation(4));
