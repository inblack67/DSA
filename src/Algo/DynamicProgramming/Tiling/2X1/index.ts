// fibonacci
const tiling2 = (floorLen: number): number => {
  // one len remains => can be filled with one tile only
  if (floorLen <= 1) {
    return 1;
  }
  const sum = tiling2(floorLen - 1) + tiling2(floorLen - 2);
  return sum;
};

// console.log(tiling2(8));

const tiling = (floorLen: number): void => {
  const dp: number[] = new Array(floorLen + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i < dp.length; i++) {
    dp[i] += dp[i - 1] + dp[i - 2];
  }
  console.log(dp[dp.length - 1]);
};

tiling(8);
