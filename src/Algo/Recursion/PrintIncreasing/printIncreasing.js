const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const printIncreasing = (range) => {
  if (range < 1) {
    return;
  }
  printIncreasing(range - 1);
  console.log(range);
};

const main = () => {
  const num = readMe();
  printIncreasing(+num);
};

main();
