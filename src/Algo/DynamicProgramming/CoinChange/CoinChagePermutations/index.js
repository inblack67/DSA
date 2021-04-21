const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const printCountCoinPermutations = (coins, amount) => {
  const dp = new Array(amount + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j < coins.length; j++) {
      const coin = coins[j];
      if (i >= coin) {
        const rest = i - coin;
        dp[i] += dp[rest];
      }
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
  printCountCoinPermutations(coins, amount);
};

main();
