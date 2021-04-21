const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const get2DArray = (rows, cols, fillZeroes = true) => {
  const arr = new Array(rows)
    .fill(null)
    .map(() => new Array(cols).fill(fillZeroes ? 0 : null));
  return arr;
};

const maxGold = (mine) => {
  const dp = get2DArray(mine.length, mine[0].length);
  for (let col = mine[0].length - 1; col >= 0; col--) {
    for (let row = mine.length - 1; row >= 0; row--) {
      let maxGold = 0;
      if (col === mine[0].length - 1) {
        // last col
        maxGold = 0;
        dp[row][col] = maxGold + mine[row][col];
      } else if (row === 0) {
        // first row
        maxGold = Math.max(dp[row + 1][col + 1], dp[row][col + 1]);
        dp[row][col] = maxGold + mine[row][col];
      } else if (row === mine.length - 1) {
        // last row
        maxGold = Math.max(dp[row][col + 1], dp[row - 1][col + 1]);
        dp[row][col] = maxGold + mine[row][col];
      } else {
        // rest
        maxGold = Math.max(
          dp[row + 1][col + 1],
          dp[row][col + 1],
          dp[row - 1][col + 1],
        );
        dp[row][col] = maxGold + mine[row][col];
      }
    }
  }
  let max = 0;
  for (let row = 0; row < dp.length - 1; row++) {
    const el = dp[row][0];
    if (el > max) {
      max = el;
    }
  }
  console.log(max);
};

const main = () => {
  const rows = +readMe();
  const cols = +readMe();
  const mine = get2DArray(rows, cols);
  for (let i = 0; i < rows; i++) {
    const row = readMe().split(' ');
    for (let j = 0; j < cols; j++) {
      const el = row[j];
      mine[i][j] = +el;
    }
  }
  maxGold(mine);
};

main();
