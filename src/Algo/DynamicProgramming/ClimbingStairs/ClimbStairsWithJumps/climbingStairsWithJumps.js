const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const climbStairsWithJumps = (jumps) => {
  const dp = new Array(jumps.length + 1).fill(0);
  dp[dp.length - 1] = 1;
  for (let i = dp.length - 2; i >= 0; i--) {
    for (let j = 1; j <= jumps[i] && i + j < dp.length; j++) {
      dp[i] += dp[i + j];
    }
  }
  console.log(dp[0]); // number of diff paths from bottom to top
};

const main = () => {
  const arrSize = readMe();
  const arr = new Array(+arrSize);
  for (let i = 0; i < arr.length; i++) {
    const el = readMe();
    arr[i] = +el;
  }
  climbStairsWithJumps(arr);
};

main();
