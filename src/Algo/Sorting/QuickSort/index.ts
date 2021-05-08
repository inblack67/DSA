// in place
const swap_5 = (arr: number[], index1: number, index2: number): void => {
  console.log(`Swapping ${arr[index1]} and ${arr[index2]}`);
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};

const displayArray_5 = (arr: number[]): void => {
  for (let i = 0; i < arr.length; i++) {
    process.stdout.write(`${arr[i]}`);
  }
};

const performParitioning = (arr: number[]): number => {
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
      swap_5(arr, i, j);
    }
  }
  swap_5(arr, pivotIndex, j);
  console.log(arr);
  return j;
};

// const myArray_5 = [8, 3, 7, 4, 9, 2, 6, 5];
// const myArray_5 = [1.5,2,7, -2, 4, 1, 3, 3];
const myArray_5 = [50, 70, 60, 90, 40, 80, 10, 20, 30];
// const myArray_5 = [7, -2, 4, 1, 3];
performParitioning(myArray_5, 3);
console.log(myArray_5);
