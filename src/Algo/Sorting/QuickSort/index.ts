// in place
const swap_6 = (arr: number[], index1: number, index2: number): void => {
  console.log(`Swapping ${arr[index1]} and ${arr[index2]}`);
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};

const displayArray_6 = (arr: number[]): void => {
  for (let i = 0; i < arr.length; i++) {
    process.stdout.write(`${arr[i]} `);
  }
};

const performParitioning_3 = (
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
      swap_6(arr, i, j);
    }
  }
  swap_6(arr, pivotIndex, j);
  return j;
};

const performQuickSort = (arr: number[], low: number, high: number): void => {
  if (low < high) {
    // at least 2 els
    const pivotIndex = performParitioning_3(arr, low, high);
    performQuickSort(arr, low, pivotIndex);
    performQuickSort(arr, pivotIndex + 1, high);
  }
};

// const myArray_7 = [7, -2, 4, 1, 3];
// const myArray_7 = [8, 3, 7, 4, 9, 2, 6, 5];
const myArray_7 = [50, 70, 60, 90, 40, 80, 10, 20, 30];
performQuickSort(myArray_7, 0, myArray_7.length);
console.log(myArray_7);
