const findPivot = (arr: number[]): void => {
  let low = 0;
  let high = arr.length - 1;
  while (low < high) {
    //   low === high => our result
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] < arr[high]) {
      // dropping on LHS
      high = mid;
    } else {
      // dropping on RHS
      low = mid + 1;
    }
  }
  console.log(arr[high]);
};

findPivot([11, 15, 26, 38, 9, 10]);
// findPivot([15, 16, 19, 21, 23, 24, 1, 2, 12]);
