const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const myPow = (x, n) => {
  if (n === 0) {
    return 1;
  }
  const calc = myPow(x, Math.floor(n / 2));
  let res = calc * calc;
  if (n % 2 === 0) {
    return res;
  }
  res *= x;
  return res;
};

const main = () => {
  const num1 = readMe();
  const num2 = readMe();
  const res = myPow(+num1, +num2);
  console.log(res);
};

main();
