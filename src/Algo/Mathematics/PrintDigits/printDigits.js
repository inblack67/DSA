const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const printDigits = (num) => {
  let res = '';
  while (num > 0) {
    res += num % 10;
    num = Math.floor(num / 10);
  }
  for (let i = res.length - 1; i >= 0; i--) {
    console.log(res[i]);
  }
};

const main = () => {
  const num = +readMe();
  printDigits(num);
};

main();
