const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const reverseNumber = (num) => {
  let n = num;
  while (n > 0) {
    console.log(n % 10);
    n = Math.floor(n / 10);
  }
};

const main = () => {
  const num = +readMe();
  reverseNumber(num);
};

main();
