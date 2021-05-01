const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const tiling = (floorLen) => {
  const dp = new Array(floorLen + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i < dp.length; i++) {
    if (i === 1) {
      dp[i] += dp[i - 1];
    } else {
      dp[i] += dp[i - 1] + dp[i - 2];
    }
  }
  console.log(dp[dp.length - 1]);
};

const main = () => {
  const floorLen = +readMe();
  tiling(floorLen);
};

main();
