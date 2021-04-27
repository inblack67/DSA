const countSubs = (str: string): void => {
  const dp = new Array(3)
    .fill(null)
    .map(() => new Array(str.length + 1).fill(0));

  for (let row = 0; row < dp.length; row++) {
    for (let col = 1; col < dp[0].length; col++) {}
  }
  console.log(dp);
};

countSubs('abcabc');
