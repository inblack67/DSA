// one transaction = buy and sell
const buySell1 = (stocks: number[]): void => {
  let minSellingPrice = Number.MAX_SAFE_INTEGER; // min selling price till today
  let profitSoFar = 0;
  let profitIfSoldToday = 0;

  for (let i = 0; i < stocks.length; i++) {
    const el = stocks[i];
    if (el < minSellingPrice) {
      minSellingPrice = el;
    }
    profitIfSoldToday = el - minSellingPrice;
    if (profitIfSoldToday > profitSoFar) {
      profitSoFar = profitIfSoldToday;
    }
  }
  console.log(profitSoFar);
};

buySell1([11, 6, 7, 19, 4, 1, 6, 18, 4]);
