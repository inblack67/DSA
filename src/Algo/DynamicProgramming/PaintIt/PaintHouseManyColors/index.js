const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const paintHouseMinCost = (rates) => {
  const dp = new Array(rates.length)
    .fill(null)
    .map(() => new Array(rates[0].length).fill(0));

  for (let col = 0; col < rates[0].length; col++) {
    dp[0][col] = rates[0][col];
  }

  for (let row = 1; row < dp.length; row++) {
    for (let col = 0; col < dp[0].length; col++) {
      let min = Number.MAX_SAFE_INTEGER;
      for (let i = 0; i < dp[0].length; i++) {
        if (i !== col) {
          const prev = dp[row - 1][i];
          if (prev < min) {
            min = prev;
          }
        }
      }
      dp[row][col] = rates[row][col] + min;
    }
  }

  let min = Number.MAX_SAFE_INTEGER;
  for (let k = 0; k < dp[0].length; k++) {
    const el = dp[rates.length - 1][k];
    if (el < min) {
      min = el;
    }
  }
  console.log(min);
};

const main = () => {
  const [houses, colors] = readMe()
    .split(' ')
    .map((el) => +el);
  const rates = [];
  for (let i = 0; i < houses; i++) {
    const row = readMe().split(' ');
    const myRow = [];
    for (let j = 0; j < colors; j++) {
      const el = row[j];
      myRow.push(+el);
    }
    rates.push(myRow);
  }
  paintHouseMinCost(rates);
};

main();
