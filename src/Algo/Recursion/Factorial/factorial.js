const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const factorial = (range) => {
  if (range <= 1) {
    return 1;
  }
  return range * factorial(range - 1);
};

const main = () => {
  const num = readMe();
  const res = factorial(num);
  console.log(res);
};

main();
