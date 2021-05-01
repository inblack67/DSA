const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const tilingMX1 = (len, breadth) => {
  const dp = new Array(len + 1).fill(0);
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 1; i < dp.length; i++) {
    if (i < breadth) {
      dp[i] = 1; // only 1 way => vertically
    } else if (i === breadth) {
      dp[i] = 2; // 2 ways => horizontally and vertically
    } else {
      dp[i] = dp[i - 1] + dp[i - breadth];
    }
  }
  console.log(dp[dp.length - 1]);
};

const main = () => {
  const len = +readMe();
  const breadth = +readMe();
  tilingMX1(len, breadth);
};

main();
