const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const solveKnapsack01 = (profits, weights, capacity) => {
  const dp = new Array(weights.length + 1)
    .fill(null)
    .map(() => new Array(capacity + 1).fill(0));

  for (let row = 0; row < dp.length; row++) {
    for (let col = 0; col < dp[0].length; col++) {
      if (row === 0 || col === 0) {
        dp[row][col] = 0;
      } else {
        const currentWeight = weights[row - 1];
        const currentProfit = profits[row - 1];
        const prev = dp[row - 1][col];
        if (col >= currentWeight) {
          const totalTillNow = currentProfit + dp[row - 1][col - currentWeight];
          const max = Math.max(prev, totalTillNow);
          dp[row][col] = max;
        } else {
          dp[row][col] = prev; // curr is not eligible take the prev one
        }
      }
    }
  }
  console.log(dp[dp.length - 1][dp[0].length - 1]);
};

const main = () => {
  const totalItems = +readMe();
  const profits = readMe()
    .split(' ')
    .map((el) => +el);
  const weights = readMe()
    .split(' ')
    .map((el) => +el);
  const capacity = +readMe();
  solveKnapsack01(profits, weights, capacity);
};

main();
