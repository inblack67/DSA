const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

// subArray => indexes are contiguous
// subsets => random indexes allowed
const targetSumSubsetsDP = (arr, target) => {
  //   every el will say yes or not
  //   subsets possible => 2^n
  const dp = new Array(arr.length + 1)
    .fill(null)
    .map(() => new Array(target + 1).fill(false));
  for (let row = 0; row < dp.length; row++) {
    for (let col = 0; col < dp[0].length; col++) {
      if (col === 0) {
        dp[row][col] = true;
      } else if (row === 0 && col > 0) {
        dp[row][col] = false;
      } else {
        const prev = dp[row - 1][col];
        if (prev) {
          // prev team can make it => I can make it
          dp[row][col] = true;
        } else {
          // Ok I'll bat but after I finish => can the prev team make the remaining runs?
          const currVal = arr[row - 1]; // dp.length === arr.length + 1
          if (col >= currVal) {
            const rest = col - currVal;
            if (dp[row - 1][rest]) {
              dp[row][col] = true;
            } else {
              dp[row][col] = false;
            }
          } else {
            dp[row][col] = prev;
          }
        }
      }
    }
  }
  console.log(dp[dp.length - 1][dp[0].length - 1]);
};

const main = () => {
  const arrSize = +readMe();
  const arr = new Array(arrSize);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = +readMe();
  }
  const target = +readMe();
  targetSumSubsetsDP(arr, target);
};
main();
