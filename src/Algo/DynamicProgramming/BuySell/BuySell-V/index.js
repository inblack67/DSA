const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const buySell5 = (prices) => {
  // sell today => buy in the past
  // have to keep track of min buy
  let minBuy = prices[0];
  const pastDP = new Array(prices.length).fill(0); // profits till today
  pastDP[0] = 0;
  for (let i = 1; i < prices.length; i++) {
    const el = prices[i];
    if (el < minBuy) {
      minBuy = el; // kept track of min buy
    }
    const todayProfit = el - minBuy;
    if (todayProfit > pastDP[i - 1]) {
      pastDP[i] = todayProfit;
    } else {
      pastDP[i] = pastDP[i - 1];
    }
  }

  // buy today => sell in the future
  // have to keep track of max sell
  let maxSell = prices[prices.length - 1];
  const futureDP = new Array(prices.length).fill(0);
  futureDP[futureDP.length - 1] = 0;
  for (let i = prices.length - 2; i >= 0; i--) {
    const el = prices[i];
    if (el > maxSell) {
      maxSell = el;
    }
    const futureProfit = maxSell - el;
    if (futureProfit > futureDP[i + 1]) {
      futureDP[i] = futureProfit;
    } else {
      futureDP[i] = futureDP[i + 1];
    }
  }

  let res = 0;
  for (let i = 0; i < prices.length; i++) {
    const sum = pastDP[i] + futureDP[i];
    if (sum > res) {
      res = sum;
    }
  }
  return res;
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
