export const partitionIntoSubsets = (peeps: number, teamSize: number): void => {
  if (peeps === 0 || teamSize === 0 || teamSize > peeps) {
    console.log(0);
    return;
  }

  const dp = new Array(teamSize + 1)
    .fill(null)
    .map(() => new Array(peeps + 1).fill(0));

  // row => team sizes
  // col => peeps
  for (let row = 1; row <= teamSize; row++) {
    for (let col = 1; col <= peeps; col++) {
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

partitionIntoSubsets(4, 3);
