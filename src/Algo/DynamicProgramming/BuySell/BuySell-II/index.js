const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const buySell2 = (stocks) => {
  let profitSoFar = 0;
  let buy = 0;
  let sell = 0;
  //   first day => buy and sell day
  for (let i = 1; i < stocks.length; i++) {
    const el = stocks[i];
    if (el >= stocks[i - 1]) {
      sell++;
    } else {
      profitSoFar += stocks[sell] - stocks[buy];
      buy = i;
      sell = i;
    }
  }
  profitSoFar += stocks[sell] - stocks[buy]; // settling last peak after loops ends => no dip afterwards
  console.log(profitSoFar);
};

const main = () => {
  const arrSize = +readMe();
  const arr = [];
  for (let i = 0; i < arrSize; i++) {
    const el = +readMe();
    arr.push(el);
  }
  buySell2(arr);
};

main();
