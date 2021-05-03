const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const buySell3 = (stocks, fee) => {
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

const main = () => {
  const arrSize = +readMe();
  const arr = [];
  for (let i = 0; i < arrSize; i++) {
    const el = +readMe();
    arr.push(el);
  }
  const fees = +readMe();
  buySell3(arr, fees);
};

main();
