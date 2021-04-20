const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const isItPrime = (num) => {
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const printPrimes = (low, high) => {
  for (let i = low; i <= high; i++) {
    if (isItPrime(i)) {
      console.log(i);
    }
  }
};

const main = () => {
  const low = readMe();
  const high = readMe();
  printPrimes(+low, +high);
};

main();
