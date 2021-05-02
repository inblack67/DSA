const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const buySell1 = (stocks) => {
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

const main = () => {
  const arrSize = +readMe();
  const arr = [];
  for (let i = 0; i < arrSize; i++) {
    const el = +readMe();
    arr.push(el);
  }
  buySell1(arr);
};

main();
