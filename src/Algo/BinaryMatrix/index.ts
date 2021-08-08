const getMaxRowIndex = (mat: number[][]): number => {
  let row = 0;
  let col = 0;
  let maxRow = 0;
  while (row < mat.length && col < mat[0].length) {
    const el = mat[row][col];
    if (el === 0) {
      maxRow = row;
      col++;
    } else {
      row++;
    }
  }
  return maxRow;
};

const binaryMatrix: number[][] = [
  [0, 0, 0, 1, 1],
  [0, 0, 1, 1, 1],
  [0, 0, 0, 0, 1],
  [0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0],
];

console.log(getMaxRowIndex(binaryMatrix));
