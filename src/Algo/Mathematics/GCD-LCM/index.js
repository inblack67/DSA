const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const getGCD = (num1, num2) => {
  let divisor = num1;
  let divident = num2;
  while (divident % divisor !== 0) {
    let remainder = divident % divisor;
    divident = divisor;
    divisor = remainder;
  }
  return divisor;
};

const printGCDAndLCM = (num1, num2) => {
  const gcd = getGCD(num1, num2);
  const lcm = (num1 * num2) / gcd;
  console.log(gcd);
  console.log(lcm);
};

const main = () => {
  const num1 = +readMe();
  const num2 = +readMe();
  printGCDAndLCM(num1, num2);
};

main();
