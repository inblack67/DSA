// in place
const swap_2 = (arr: number[], index1: number, index2: number): void => {
  console.log(`Swapping ${arr[index1]} and ${arr[index2]}`);
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};

const displayArray_2 = (arr: number[]): void => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

export const performInsertionSort = (arr: number[]): void => {
  // [8, 3, 7, 4, 9, 2, 6, 5]
  // first element is already sorted
  for (let i = 1; i < arr.length; i++) {
    const el = arr[i];
    let j = i - 1;
    while (arr[j] > el && j > -1) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = el;
  }
  displayArray_2(arr);
};

export const performInsertionSort_2 = (arr: number[]): void => {
  // [8, 3, 7, 4, 9, 2, 6, 5]
  // first element is already sorted
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      console.log(`Comparing ${arr[j + 1]} and ${arr[j]}`);
      if (arr[j] > arr[j + 1]) {
        swap_2(arr, j, j + 1);
      } else {
        break;
      }
    }
  }
  displayArray_2(arr);
};

// const myArray = [7, -2, 4, 1, 3];
const myArray_2 = [8, 3, 7, 4, 9, 2, 6, 5];
performInsertionSort_2(myArray_2);
console.log(myArray_2);
