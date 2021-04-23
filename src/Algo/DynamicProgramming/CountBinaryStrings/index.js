const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const countBSWithNoConsecutive0s_2 = (len) => {
  let oldZeroes = 1; // starting from length 1
  let oldOnes = 1;

  for (let i = 2; i <= len; i++) {
    const newZeroes = oldOnes;
    const newOnes = oldZeroes + oldOnes;
    oldZeroes = newZeroes;
    oldOnes = newOnes;
  }

  console.log(oldZeroes + oldOnes);
};

const countBSWithNoConsecutive0s = (len) => {
  // meaning => each cell contains number valid string ending with 0/1
  const dp = new Array(2).fill(null).map(() => new Array(len + 1).fill(0));

  dp[0][0] = 0; // no string of 0 length can be made with 0
  dp[0][1] = 1; // one string of length 1 can be made with 0
  dp[1][0] = 0; // no string of 0 length can be made with 1
  dp[1][1] = 1; // one string of length 1 can be made with 0

  for (let col = 2; col < dp[0].length; col++) {
    for (let row = 0; row < dp.length; row++) {
      if (row === 0) {
        dp[row][col] = dp[row + 1][col - 1]; // cant append current 0 to the prev string ending with zero
      } else {
        dp[row][col] = dp[row - 1][col - 1] + dp[row][col - 1];
      }
    }
  }
  // sum of last two cols
  console.log(dp[0][dp[0].length - 1] + dp[1][dp[0].length - 1]);
};

const main = () => {
  const len = +readMe();
  countBSWithNoConsecutive0s(len);
};

main();
