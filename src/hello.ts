const isPathSafe = (lot, row, col) => {
  if (lot[row][col] === 1 || lot[row][col] === 9) {
    return true;
  }
  return false;
};

const solveThis = (lot, row = 0, col = 0, count = 0) => {
  if (row >= lot.length || col >= lot[0].length || row < 0 || col < 0) {
    console.log(count);
    return count;
  }

  let newCount;

  if (isPathSafe(lot, row, col)) {
    if (lot[row][col] === 9) {
      return count + 1;
    }
    newCount = count + 1;
  } else {
    newCount = count;
  }

  lot[row][col] = 0;
  solveThis(lot, row, col + 1, newCount);
  solveThis(lot, row + 1, col, newCount);
  solveThis(lot, row, col - 1, newCount);
  solveThis(lot, row - 1, col, newCount);
  lot[row][col] = 1;

  return newCount;
};

function distanceTraversed(lot) {
  // Write your code here
  const res = solveThis(lot);
  console.log('res = ', res);
  return res;
}

distanceTraversed([
  [1, 0, 0],
  [1, 0, 0],
  [1, 9, 1],
]);
