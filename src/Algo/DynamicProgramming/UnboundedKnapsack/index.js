const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const solveUnboundedKnapsack = (profits, weights, capacity) => {
  const dp = new Array(capacity + 1).fill(0);
  dp[0] = 0;
  for (let bagSize = 1; bagSize < dp.length; bagSize++) {
    for (let objIndex = 0; objIndex < weights.length; objIndex++) {
      const objectSize = weights[objIndex];
      const objectProfit = profits[objIndex];
      if (bagSize >= objectSize) {
        const curr = dp[bagSize];
        const next = objectProfit + dp[bagSize - objectSize];
        if (next > curr) {
          dp[bagSize] = next;
        }
      }
    }
  }
  console.log(dp[dp.length - 1]);
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
  solveUnboundedKnapsack(profits, weights, capacity);
};

main();
