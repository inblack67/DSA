const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const printDecreasing = (range) => {
  if (range < 1) {
    return;
  }
  console.log(range);
  return printDecreasing(range - 1);
};

const main = () => {
  const num = readMe();
  printDecreasing(+num);
};

main();
