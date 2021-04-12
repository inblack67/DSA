const getToePlitzMat = (order: number, nums: number[]) => {
  const size = 2 * order - 1;
  const arr = new Array(size);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = nums[i];
  }
  return arr;
};

const queryToePlitzMat = (
  order: number,
  mat: number[],
  row: number,
  col: number,
) => {
  const diff = row - col;
  if (diff === -1) {
    //   upper triangular part
    return mat[col - row];
  } else if (diff === 0) {
    //   main
    return mat[row - col];
  } else {
    //   lower
    const index = order + row - col - 1;
    return mat[index];
  }
};

const mat = getToePlitzMat(5, [2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(queryToePlitzMat(5, mat, 4, 1));
