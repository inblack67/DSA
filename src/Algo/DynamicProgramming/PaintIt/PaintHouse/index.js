const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const paintHouseMinCost = (rates) => {
  const dp = new Array(rates.length)
    .fill(null)
    .map(() => new Array(rates[0].length).fill(0));

  for (let row = 0; row < dp.length; row++) {
    for (let col = 0; col < dp[0].length; col++) {
      if (row === 0) {
        dp[row][col] = rates[row][col];
      } else {
        dp[row][col] = rates[row][col];
        if (col === 0) {
          dp[row][col] += Math.min(dp[row - 1][col + 1], dp[row - 1][col + 2]);
        } else if (col === 1) {
          dp[row][col] += Math.min(dp[row - 1][col + 1], dp[row - 1][col - 1]);
        } else {
          dp[row][col] += Math.min(dp[row - 1][col - 1], dp[row - 1][col - 2]);
        }
      }
    }
  }

  const res = Math.min(...dp[rates.length - 1]);
  console.log(res);
};

const main = () => {
  const arrSize = +readMe();
  const rates = [];
  for (let i = 0; i < arrSize; i++) {
    const arr = readMe()
      .split(' ')
      .map((el) => +el);
    rates.push(arr);
  }
  paintHouseMinCost(rates);
};

main();
