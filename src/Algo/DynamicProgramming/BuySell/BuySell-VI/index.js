const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const buySell5 = (stocks) => {
  let minBuy = stocks[0];
  const dp = new Array(stocks.length).fill(0);
  dp[0] = 0;
  // sell today => max profit till date
  for (let i = 1; i < stocks.length; i++) {
    const el = stocks[i];
    const todayProfit = el - minBuy;
    if (todayProfit > dp[i - 1]) {
      dp[i] = todayProfit;
    } else {
      dp[i] = dp[i - 1];
    }
    if (el < minBuy) {
      // mainting min buy
      minBuy = el;
    }
  }
  const dp2 = new Array(stocks.length).fill(0);
  dp2[0] = 0;
  let minBuy2 = stocks[stocks.length - 1];
  // buy today => max profit in future
  for (let i = stocks.length - 2; i >= 0; i--) {
    const el = stocks[i];
    let currProfit = minBuy2 - el;
    if (currProfit > dp2[i + 1]) {
      dp2[i] = currProfit;
    } else {
      dp2[i] = dp2[i + 1];
    }
    if (el > minBuy2) {
      minBuy2 = el;
    }
  }
  let res = 0;
  for (let i = 0; i < stocks.length; i++) {
    const sum = dp[i] + dp2[i];
    if (sum > res) {
      res = sum;
    }
  }
  console.log(res);
};

const main = () => {
  const arrSize = +readMe();
  const arr = [];
  for (let i = 0; i < arrSize; i++) {
    const el = +readMe();
    arr.push(el);
  }
  buySell5(arr);
};

main();
