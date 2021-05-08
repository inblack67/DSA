// in place
const swap_7 = (arr: number[], index1: number, index2: number): void => {
  console.log(`Swapping ${arr[index1]} and ${arr[index2]}`);
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};

const displayArray_7 = (arr: number[]): void => {
  for (let i = 0; i < arr.length; i++) {
    process.stdout.write(`${arr[i]} `);
  }
};

const performParitioning_7 = (
  arr: number[],
  low: number,
  high: number,
): number => {
  const pivotIndex = low;
  let i = pivotIndex;
  const pivot = arr[pivotIndex];
  let j = high;
  while (i < j) {
    do {
      i++;
    } while (arr[i] <= pivot);
    do {
      j--;
    } while (arr[j] > pivot);

    // now i points to the el > pivot and j points to the el <= pivot
    if (i < j) {
      swap_7(arr, i, j);
    }
  }
  swap_7(arr, pivotIndex, j);
  return j;
};

const performQuickSelect = (
  arr: number[],
  low: number,
  high: number,
  k: number,
): void => {
  let pivotIndex = performParitioning_7(arr, low, high);
  let target = k - 1;
  if (target === pivotIndex) {
    console.log(arr[target]);
    return;
  } else if (target < pivotIndex) {
    performQuickSelect(arr, low, pivotIndex, k);
  } else {
    performQuickSelect(arr, pivotIndex + 1, high, k);
  }
};

const myArray_8 = [5, 6, 1, 2, 7, 3];
// const myArray_8 = [7, -2, 4, 1, 3];
// const myArray_8 = [50, 70, 60, 90, 40, 80, 10, 20, 30];
performQuickSelect(myArray_8, 0, myArray_8.length, 3); // find out 3rd smallest element
