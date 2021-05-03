const buySell3 = (stocks: number[], fee: number) => {
  let buySellBuy = -stocks[0]; // buy sell buy => one buy extra loan
  let buySell = 0; // complete cycle of buy sell
  for (let i = 1; i < stocks.length; i++) {
    const el = stocks[i];
    let newBuySellBuy = buySell - el;
    let newBuySell = el + buySellBuy - fee;
    if (newBuySellBuy > buySellBuy) {
      buySellBuy = newBuySellBuy;
    }
    if (newBuySell > buySell) {
      buySell = newBuySell;
    }
  }
  console.log(buySell);
};

buySell3([10, 15, 17, 20, 16, 18, 22, 20, 22, 20, 23, 25], 3);
