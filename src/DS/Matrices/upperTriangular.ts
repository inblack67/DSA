const getSumOfNs = (range: number) => (range * (range + 1)) / 2;

const getUpperTriangular = (_: number, nums: number[]) => {
  const arr = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    arr[i] = nums[i];
  }
  return arr;
};

const queryUpperTraingularMatRMO = (
  order: number,
  mat: number[],
  row: number,
  col: number,
) => {
  if (row > col) {
    return 0;
  }
  const index = order * (row - 1) - getSumOfNs(row - 2) + (col - row);
  return mat[index];
};

const queryUpperTraingularMatCMO = (
  _: number,
  mat: number[],
  row: number,
  col: number,
) => {
  if (row > col) {
    return 0;
  }
  const index = getSumOfNs(col - 1) + (row - 1);
  return mat[index];
};

const numberOfNonZeroElements = (order: number) => {
  return getSumOfNs(order);
};

const numberOfZeroElements = (
  numberOfNonZeroElements: number,
  order: number,
) => {
  return Math.pow(order, 2) - numberOfNonZeroElements;
};

const totalElements = (order: number) => Math.pow(order, 2);

const mat2 = getUpperTriangular(5, [
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
console.log(queryUpperTraingularMatRMO(5, mat2, 4, 4));
console.log(queryUpperTraingularMatCMO(5, mat2, 4, 5));
