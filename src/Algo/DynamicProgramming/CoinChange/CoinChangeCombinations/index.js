const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const printCountCoinCombos = (coins, amount) => {
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

const main = () => {
  const arrSize = +readMe();
  const coins = new Array(arrSize);
  for (let i = 0; i < arrSize; i++) {
    const el = +readMe();
    coins.push(el);
  }
  const amount = +readMe();
  printCountCoinCombos(coins, amount);
};

main();
