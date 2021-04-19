const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const climbStairsTabulation = (stairs) => {
  const dp = new Array(stairs + 1);
  dp[0] = 1; // 1 to 0 => one move
  for (let i = 1; i < dp.length; i++) {
    if (i === 1) {
      dp[i] = dp[i - 1];
    } else if (i === 2) {
      dp[i] = dp[i - 1] + dp[i - 2];
    } else {
      dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
    }
  }
  return dp[dp.length - 1];
};

const main = () => {
  const stairs = readMe();
  console.log(climbStairsTabulation(+stairs));
};

main();
