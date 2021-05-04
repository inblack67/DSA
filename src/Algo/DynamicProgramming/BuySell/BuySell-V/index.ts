const buySell5 = (stocks: number[]): void => {
  let minBuy = stocks[0];
  const dp = new Array(stocks.length).fill(0); // max profit on LHS (PAST)
  dp[0] = 0;
  // sell today => buy in the past
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
  const dp2 = new Array(stocks.length).fill(0); // max profit on RHS (FUTURE)
  dp2[0] = 0;
  let minBuy2 = stocks[stocks.length - 1];
  // buy today => sell in future
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

buySell5([11, 6, 7, 19, 4, 1, 6, 18, 4]);

function maxProfit(prices: number[]): number {
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
}

console.log(maxProfit([11, 6, 7, 19, 4, 1, 6, 18, 4]));
