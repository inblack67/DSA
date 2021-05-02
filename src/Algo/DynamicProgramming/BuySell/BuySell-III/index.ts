const buySell3 = (stocks: number[], fee: number) => {
  let profit = 0;
  let buy = 0;
  let sell = 0;
  for (let i = 0; i < stocks.length; i++) {
    if (stocks[i] >= stocks[i - 1]) {
      sell++;
    } else {
      profit += stocks[sell] - stocks[buy];
      buy = sell = i;
    }
  }
  console.log(profit);
};

buySell3([10, 15, 17, 20, 16, 18, 22, 20, 22, 20, 23, 25], 3);
