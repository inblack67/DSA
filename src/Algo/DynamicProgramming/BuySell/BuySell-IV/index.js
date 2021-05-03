const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const buySell4 = (stocks) => {
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

const main = () => {
  const arrSize = +readMe();
  const arr = [];
  for (let i = 0; i < arrSize; i++) {
    const el = +readMe();
    arr.push(el);
  }
  buySell4(arr);
};

main();
