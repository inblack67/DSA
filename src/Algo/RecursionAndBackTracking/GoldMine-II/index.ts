const goldmine2 = (mine: number[][]): number => {
  let maxGold = 0;
  const visited: boolean[][] = new Array(mine.length + 1)
    .fill(null)
    .map(() => new Array(mine.length + 1).fill(false));

  for (let i = 0; i < mine.length; i++) {
    for (let j = 0; j < mine[0].length; j++) {
      const bag: number[] = [];
      const el = mine[i][j];
      if (el !== 0 && visited[i][j] === false) {
        travelAndCollect(mine, i, j, visited, bag);
      }
      let sumSoFar = 0;
      bag.forEach((el) => (sumSoFar += el));
      if (sumSoFar > maxGold) {
        maxGold = sumSoFar;
      }
    }
  }

  return maxGold;
};

const travelAndCollect = (
  mine: number[][],
  row: number,
  col: number,
  visited: boolean[][],
  bag: number[],
): void => {
  if (
    row < 0 ||
    row >= mine.length ||
    col < 0 ||
    col >= mine[0].length ||
    mine[row][col] === 0 ||
    visited[row][col] === true
  ) {
    return;
  }
  visited[row][col] = true;
  bag.push(mine[row][col]);
  travelAndCollect(mine, row + 1, col, visited, bag);
  travelAndCollect(mine, row - 1, col, visited, bag);
  travelAndCollect(mine, row, col + 1, visited, bag);
  travelAndCollect(mine, row, col - 1, visited, bag);
};

console.log(
  goldmine2([
    [0, 1, 4, 2, 8, 2],
    [4, 3, 6, 5, 0, 4],
    [1, 2, 4, 1, 4, 6],
    [2, 0, 7, 3, 2, 2],
    [3, 1, 5, 9, 2, 4],
    [2, 7, 0, 8, 5, 1],
  ]),
);
