const paintFencesWays2 = (fences: number, colors: number) => {
  const dp = new Array(3).fill(null).map(() => new Array(fences).fill(0));
  //   for a particular col =>
  //   first row => last 2 colors same
  //   second row => last 2 colors diff
  //   third row => total ways
  for (let col = 1; col < dp[0].length; col++) {
    for (let row = 0; row < dp.length; row++) {
      if (col === 1) {
        dp[0][col] = colors * 1;
        dp[1][col] = colors * (colors - 1);
        dp[2][col] = dp[0][col] + dp[1][col];
      } else {
        dp[0][col] = dp[1][col - 1]; // last two same =>  prev diff ones + their last color
        dp[1][col] = dp[2][col - 1] * (colors - 1); // last two diff => prev total ones + any color except their last color
        dp[2][col] = dp[0][col] + dp[1][col]; // total
      }
    }
  }
  console.log(dp[dp.length - 1][dp[0].length - 1]);
};

const paintFencesWays = (fences: number, colors: number): void => {
  // for first 2 fences
  let same = colors * 1;
  let diff = colors * (colors - 1);
  let total = same + diff;

  //   for rest of them
  for (let i = 3; i <= fences; i++) {
    const newSame = diff;
    const newDiff = total * (colors - 1);
    const newTotal = newSame + newDiff;
    same = newSame;
    diff = newDiff;
    total = newTotal;
  }
  console.log(total);
};

paintFencesWays(8, 3);
