const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const buySell6 = (stocks, transactions) => {
  // rows => transactions => 0 to k
  // cols => stocks
  const dp = new Array(transactions + 1)
    .fill(null)
    .map(() => new Array(stocks.length).fill(0));
  for (let row = 0; row < dp.length; row++) {
    for (let col = 0; col < dp[0].length; col++) {
      if (row === 0) {
        // no transactions => no profit
        dp[row][col] = 0;
      } else if (col === 0) {
        // bought stock of stocks[0] and sell on the same day => profit => 0
        dp[row][col] = 0;
      } else {
        let candidate = dp[row][col - 1]; // all transactions completed on the prev day
        for (let j = 0; j < col; j++) {
          const profit = stocks[col] - stocks[j] + dp[row - 1][j];
          if (profit > candidate) {
            candidate = profit;
          }
        }
        dp[row][col] = candidate;
      }
    }
  }
  console.log(dp[dp.length - 1][dp[0].length - 1]);
};

const main = () => {
  const arrSize = +readMe();
  const arr = [];
  for (let i = 0; i < arrSize; i++) {
    const el = +readMe();
    arr.push(el);
  }
  const transactions = +readMe();
  buySell6(arr, transactions);
};

main();
