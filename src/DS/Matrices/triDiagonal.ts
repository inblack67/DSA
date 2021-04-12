// [...lower, ...main, ...upper];
const getTriDiagonalMat = (order: number, nums: number[]) => {
  const matSize = 3 * order - 2;
  const arr = new Array(matSize);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = nums[i];
  }
  return arr;
};

const queryTriMat = (
  order: number,
  mat: number[],
  row: number,
  col: number,
): number => {
  const diff = row - col;
  if (Math.abs(diff) > 1) {
    return 0;
  }
  const lowerNums = order - 1; // number of elements in lower diagonal
  const mainNums = order;
  //   const upperNums = order - 1;
  if (diff === 1) {
    //   lower
    return mat[col - 1];
  } else if (diff === 0) {
    //   main
    const index = lowerNums + (row - 1);
    return mat[index];
  } else {
    //   diff === -1 => upper
    const index = lowerNums + mainNums + (row - 1);
    return mat[index];
  }
};

const triMat = getTriDiagonalMat(5, [
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
]);
console.log(queryTriMat(5, triMat, 3, 2));
console.log(queryTriMat(5, triMat, 5, 5));
console.log(queryTriMat(5, triMat, 2, 3));
