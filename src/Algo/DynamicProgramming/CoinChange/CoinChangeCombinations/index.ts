const printCountCoinCombos = (coins: number[], amount: number): void => {
  // meaning of cell => how many ways the current cell can be paid
  const dp = new Array(amount + 1).fill(0);
  dp[0] = 1;

  //   coin loop is outside because combinations are needed => so coins must be in chronological order
  for (let i = 0; i < coins.length; i++) {
    const coin = coins[i];
    for (let j = coin; j < dp.length; j++) {
      const rest = j - coin;
      dp[j] += dp[rest]; // can pay the current amount
    }
  }
  console.log(dp[amount]);
};

printCountCoinCombos([2, 3, 5, 6], 7);
