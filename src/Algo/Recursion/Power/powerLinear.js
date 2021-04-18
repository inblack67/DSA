const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const myPow = (x, n) => {
  if (n === 0) {
    return 1;
  }
  return x * myPow(x, n - 1);
};

const main = () => {
  const num1 = readMe();
  const num2 = readMe();
  const res = myPow(+num1, +num2);
  console.log(res);
};

main();
