const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const partitionIntoSubsets = (peeps, teamSize) => {
  if (peeps === 0 || teamSize === 0 || teamSize > peeps) {
    console.log(0);
    return;
  }

  const dp = new Array(teamSize + 1)
    .fill(null)
    .map(() => new Array(peeps + 1).fill(0));

  // row => team sizes
  // col => peeps
  for (let row = 1; row < dp.length; row++) {
    for (let col = 1; col < dp[0].length; col++) {
      if (col < row) {
        //  teamSize more than peeps => senseless
        dp[row][col] = 0;
      } else if (col === row) {
        //   4 peeps in 4 teams => 1 way => 1 peep in each team
        dp[row][col] = 1;
      } else {
        //   peeps > teamSize
        dp[row][col] = dp[row - 1][col - 1] + dp[row][col - 1] * teamSize;
      }
    }
  }
  console.log(dp[teamSize][peeps]);
};

const main = () => {
  const peeps = +readMe();
  const teamSize = +readMe();
  partitionIntoSubsets(peeps, teamSize);
};

main();
