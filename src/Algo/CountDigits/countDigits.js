const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const countDigits = (num) => {
  let count = 0;
  let n = num;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  console.log(count);
};

const main = () => {
  const num = +readMe();
  countDigits(num);
};

main();
