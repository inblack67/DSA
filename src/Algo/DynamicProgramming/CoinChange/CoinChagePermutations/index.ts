const printCountCoinPermutations = (coins: number[], amount: number): void => {
  // meaning of cell => how many ways the current cell can be paid
  const dp = new Array(amount + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j < coins.length; j++) {
      const coin = coins[j];
      if (coin <= i) {
        const rest = i - coin;
        dp[i] += dp[rest];
      }
    }
  }
  console.log(dp[amount]);
};

printCountCoinPermutations([2, 3, 5, 6], 7);
// printCountCoinPermutations(
//   [5, 2, 3, 7, 6, 1, 12, 11, 9, 15, 16, 17, 18, 19, 20],
//   50,
// );
