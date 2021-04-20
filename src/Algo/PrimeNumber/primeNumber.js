const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const isPrime = (num) => {
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const main = () => {
  const tests = readMe();
  for (let i = 0; i < +tests; i++) {
    const num = readMe();
    const isIt = isPrime(num);
    if (isIt) {
      console.log('prime');
    } else {
      console.log('not prime');
    }
  }
};

main();
