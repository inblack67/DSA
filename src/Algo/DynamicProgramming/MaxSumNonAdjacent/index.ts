const maxSumNonAdjacent2 = (arr: number[]) => {
  let include = arr[0];
  let exclude = 0;
  for (let i = 1; i < arr.length; i++) {
    const newInclude = exclude + arr[i];
    const newExclude = Math.max(include, exclude);
    include = newInclude;
    exclude = newExclude;
  }
  console.log(Math.max(include, exclude));
};

const maxSumNonAdjacent = (arr: number[]) => {
  const dp = new Array(2).fill(null).map(() => new Array(arr.length).fill(0));
  let arrIndex = 0;
  dp[0][0] = arr[arrIndex++];
  dp[1][0] = 0;
  for (let col = 1; col < dp[0].length; col++) {
    for (let row = 0; row < dp.length; row++) {
      if (row === 0) {
        // include
        dp[row][col] = arr[arrIndex++] + dp[row + 1][col - 1];
      } else {
        //   exclude => prev excluded or included version can come
        dp[row][col] = Math.max(dp[row - 1][col - 1], dp[row][col - 1]);
      }
    }
  }
  const res = Math.max(dp[0][dp[0].length - 1], dp[1][dp[0].length - 1]);
  console.log(res);
};

// maxSumNonAdjacent([5, 10, 10, 100, 5, 6]);
maxSumNonAdjacent([
  -65,
  -65,
  -38,
  -8,
  8,
  90,
  3,
  -2,
  -98,
  67,
  -6,
  12,
  6,
  -39,
  81,
  -48,
  33,
  85,
  -9,
  82,
  69,
  81,
  -89,
  -4,
  34,
  24,
  -2,
  -90,
  58,
  18,
  51,
  60,
  79,
  91,
  -78,
  -30,
  20,
  73,
  -80,
  -55,
  -6,
  -11,
  81,
  99,
  -46,
  1,
  40,
  5,
  -88,
  -19,
  -23,
  76,
  -99,
  -20,
  -31,
  -50,
  -87,
  1,
  79,
  -79,
  -72,
  40,
  64,
  93,
  32,
  -98,
  -38,
  10,
  22,
  -93,
  -13,
  4,
  -84,
  39,
  -95,
  53,
  -86,
  -68,
  57,
  11,
  92,
  20,
  56,
  76,
  54,
  29,
  -74,
  68,
]);
