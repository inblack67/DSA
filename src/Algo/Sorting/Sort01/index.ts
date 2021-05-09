// in place
const swap_9 = (arr: number[], index1: number, index2: number): void => {
  console.log(`Swapping index ${index1} and index ${index2}`);
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};

const displayArray_9 = (arr: number[]): void => {
  for (let i = 0; i < arr.length; i++) {
    process.stdout.write(`${arr[i]} `);
  }
};

const performParitioning_4 = (arr: number[]): number => {
  const pivotIndex = 0;
  let i = pivotIndex;
  const pivot = arr[pivotIndex];
  let j = arr.length;
  while (i < j) {
    do {
      i++;
    } while (arr[i] <= pivot);
    do {
      j--;
    } while (arr[j] > pivot);

    // now i points to the el > pivot and j points to the el <= pivot
    if (i < j) {
      swap_9(arr, i, j);
    }
  }
  swap_9(arr, pivotIndex, j);
  console.log(arr);
  return j;
};

const myArray_9 = [0, 1, 0, 1, 0];
performParitioning_4(myArray_9);
console.log(myArray_9);

const performParitioning_10 = (arr, pivot) => {
  let i = 0;
  let j = 0;
  while (i < arr.length) {
    if (arr[i] > pivot) {
      i++;
    } else {
      swap_9(arr, i, j);
      i++;
      j++;
    }
  }
  console.log(arr);
};

performParitioning_10([0, 1, 0, 1, 0], 0);
