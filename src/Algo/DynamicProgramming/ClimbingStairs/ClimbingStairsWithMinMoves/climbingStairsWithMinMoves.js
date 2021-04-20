const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const climbStairsWithMinMoves = (jumps) => {
  const dp = new Array(jumps.length + 1).fill(null);
  dp[dp.length - 1] = 0;
  for (let i = dp.length - 2; i >= 0; i--) {
    const jumpsAllowed = jumps[i];
    if (jumpsAllowed > 0) {
      let min = Number.MAX_SAFE_INTEGER;
      for (let j = 1; j <= jumpsAllowed && i + j < dp.length; j++) {
        const el = dp[i + j];
        if (el !== null) {
          min = Math.min(min, el);
        }
      }
      // stop 0 from interfering the min comparison
      if (min !== Number.MAX_SAFE_INTEGER) {
        dp[i] = min + 1;
      } else {
        // if no path was found => consecutive nulls/0s
        dp[i] = null;
      }
    }
  }

  console.log(dp[0]);
};

const main = () => {
  const arrSize = readMe();
  const arr = new Array(+arrSize);
  for (let i = 0; i < arr.length; i++) {
    const el = readMe();
    arr[i] = +el;
  }
  climbStairsWithMinMoves(arr);
};

main();
