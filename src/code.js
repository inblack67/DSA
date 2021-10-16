const isPathSafe = (lot, row, col) => {
  if (lot[row][col] === 1 || lot[row][col] === 9) {
    return true;
  }
  return false;
};

const solveThis = (lot) => {
  let count = 0;
  for (let i = 0; i < lot.length; i++) {
    for (let j = 0; j < lot[0].length; j++) {
      if (isPathSafe(lot, i, j)) {
        if (lot[i][j] === 9) {
          return count;
        }
        count++;
      } else {
        continue;
      }
    }
  }
  return -1;
};

function distanceTraversed(lot) {
  const res = solveThis(lot);
  return res;
}

console.log(
  distanceTraversed([
    [1, 0, 0],
    [1, 0, 0],
    [1, 9, 1],
  ]),
);
