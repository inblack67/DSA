const tilingMX1 = (len: number, breadth: number) => {
  const dp = new Array(len + 1).fill(0);
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 1; i < dp.length; i++) {
    if (i < breadth) {
      dp[i] = 1; // only 1 way => vertically
    } else if (i === breadth) {
      dp[i] = 2; // 2 ways => horizontally and vertically
    } else {
      dp[i] = dp[i - 1] + dp[i - breadth];
    }
  }
  console.log(dp[dp.length - 1]);
};

tilingMX1(39, 16);
