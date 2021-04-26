const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const getNumAlphaMapping2 = () => {
  const dict = {};
  let count = 0;
  for (let i = 97; i <= 122; i++) {
    count++;
    const ch = String.fromCharCode(i);
    dict[count] = ch;
  }
  return dict;
};

const countEncodingsDP = (str) => {
  if (str[0] === '0') {
    return;
  }
  const dict = getNumAlphaMapping2();
  const dp = new Array(str.length).fill(0);
  dp[0] = 1; // str will never start with 0 so every first one is valid

  for (let i = 1; i < dp.length; i++) {
    const el = str[i];
    const prevEl = str[i - 1];
    if (dict[el]) {
      dp[i] = dp[i - 1];
    }
    if (dict[prevEl + el]) {
      if (i > 1) {
        dp[i] += dp[i - 2];
      } else {
        dp[i] += dp[i - 1];
      }
    }
  }
  console.log(dp[dp.length - 1]);
};

const main = () => {
  const str = readMe();
  countEncodingsDP(str);
};

main();
