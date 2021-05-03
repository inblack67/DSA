const buySell4 = (stocks: number[]) => {
  let buySellBuy = -stocks[0];
  let buySell = 0;
  let coolDown = 0;
  for (let i = 1; i < stocks.length; i++) {
    const el = stocks[i];
    let newBuySell = el + buySellBuy;
    let newBuySellBuy = coolDown - el;
    if (newBuySellBuy > buySellBuy) {
      buySellBuy = newBuySellBuy;
    }
    coolDown = buySell;
    if (newBuySell > buySell) {
      buySell = newBuySell;
    }
  }
  console.log(buySell);
};

buySell4([10, 15, 17, 20, 16, 18, 22, 20, 22, 20, 23, 25]);
