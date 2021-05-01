const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const solveFriendsPairing = (friends) => {
  const dp = new Array(friends + 1).fill(0);
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i < dp.length; i++) {
    //   current friend has two choices => single or paired
    dp[i] = dp[i - 1] /* single */ + dp[i - 2] * (i - 1) /* paired */;
  }
  console.log(dp[dp.length - 1]);
};

const main = () => {
  const friends = +readMe();
  solveFriendsPairing(friends);
};

main();
