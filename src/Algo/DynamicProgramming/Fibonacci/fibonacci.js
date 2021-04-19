const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const fibonacciTabulation = (num) => {
  const dp = new Array(num + 1).fill(0);

  // cell => fib sum of prev els
  // left to right
  // travel l to r and solve
  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i < dp.length; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  console.log(dp[dp.length - 1]);
};

const main = () => {
  const num = readMe();
  fibonacciTabulation(+num);
};

main();
