const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const minPathSum = (grid) => {
  const dp = new Array(grid.length)
    .fill(null)
    .map(() => new Array(grid[0].length).fill(0));

  for (let row = dp.length - 1; row >= 0; row--) {
    for (let col = dp[0].length - 1; col >= 0; col--) {
      if (row === dp.length - 1 && col === dp[0].length - 1) {
        // last cell
        dp[row][col] = grid[row][col];
      } else if (row === dp.length - 1) {
        // last row
        dp[row][col] = grid[row][col] + dp[row][col + 1];
      } else if (col === dp[0].length - 1) {
        // last col
        dp[row][col] = grid[row][col] + dp[row + 1][col];
      } else {
        // rest
        dp[row][col] =
          grid[row][col] + Math.min(dp[row][col + 1], dp[row + 1][col]);
      }
    }
  }
  console.log(dp[0][0]);
};

const get2DArray = (rows, cols, fillZeroes = true) => {
  const arr = new Array(rows)
    .fill(null)
    .map(() => new Array(cols).fill(fillZeroes ? 0 : null));
  return arr;
};

const main = () => {
  const rows = +readMe();
  const cols = +readMe();
  const grid = get2DArray(rows, cols);
  for (let i = 0; i < rows; i++) {
    const row = readMe().split(' ');
    for (let j = 0; j < cols; j++) {
      const el = row[j];
      grid[i][j] = +el;
    }
  }
  minPathSum(grid);
};

main();
