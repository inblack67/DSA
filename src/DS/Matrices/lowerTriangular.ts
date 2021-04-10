const sumOfNNums = (n: number) => (n * (n + 1)) / 2;

const getLowerTriRMO = (matSize: number, nums: number[]) => {
  const numberOfNonZeroElems = sumOfNNums(matSize);
  const mat = new Array(numberOfNonZeroElems);
  for (let i = 0; i < mat.length; i++) {
    mat[i] = nums[i];
  }
  return mat;
};

const getElemFromLowerRMOMat = (mat: number[], row: number, col: number) => {
  if (row < col) {
    return 0;
  }
  const index = (row * (row - 1)) / 2 + (col - 1);
  return mat[index];
};

const lowerRMOMat = getLowerTriRMO(5, [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
]);
console.log(getElemFromLowerRMOMat(lowerRMOMat, 2, 2));
console.log(getElemFromLowerRMOMat(lowerRMOMat, 4, 3));

const getElemFromLowerCMOMat = (
  order: number,
  mat: number[],
  row: number,
  col: number,
) => {
  if (row < col) {
    return 0;
  }

  const index = order * (col - 1) - ((col - 2) * (col - 1)) / 2 + (row - col);
  return mat[index];
};

const numberOfNonZeroElements2 = (order: number) => {
  return getSumOfNs(order);
};

const numberOfZeroElements2 = (
  numberOfNonZeroElements: number,
  order: number,
) => {
  return Math.pow(order, 2) - numberOfNonZeroElements;
};

const totalElements2 = (order: number) => Math.pow(order, 2);

const lowerCMOMat = getLowerTriRMO(5, [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
]);
console.log(getElemFromLowerCMOMat(5, lowerCMOMat, 2, 2));
console.log(getElemFromLowerCMOMat(5, lowerCMOMat, 4, 3));
