const buySell2 = (stocks: number[]) => {
  let profitSoFar = 0;
  let buy = 0;
  let sell = 0;
  //   first day => buy and sell day
  for (let i = 1; i < stocks.length; i++) {
    if (stocks[i] >= stocks[i - 1]) {
      sell++; // increasing
    } else {
      // downfall => sell at the last peak
      profitSoFar += stocks[sell] - stocks[buy];
      buy = sell = i;
    }
  }
  profitSoFar += stocks[sell] - stocks[buy]; // settling last peak after loops ends => no dip afterwards
  console.log(profitSoFar);
};

// buySell2([11, 6, 7, 19, 4, 1, 6, 18, 4]);
buySell2([5, 2, 0, 2, 1, 2, 0, 7]);
