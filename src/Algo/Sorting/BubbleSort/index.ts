// in place
const swap = (arr: number[], index1: number, index2: number): void => {
  console.log(`Swapping ${arr[index1]} and ${arr[index2]}`);
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};

export const displayArray = (arr: number[]): void => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

// in place => adaptive => does not swap already sorted list
export const performBubbleSort = (arr: number[]): void => {
  for (let pass = 0; pass < arr.length - 1; pass++) {
    let isSwapped = false; // to avoid further swapping in already sorted list
    for (let i = 0; i < arr.length - 1 - pass; i++) {
      const nextIndex = i + 1;
      if (nextIndex < arr.length) {
        console.log(`Comparing ${arr[nextIndex]} and ${arr[i]}`);
        if (arr[i] > arr[nextIndex]) {
          swap(arr, nextIndex, i);
          isSwapped = true;
        }
      }
    }
    if (!isSwapped) {
      // no swapping done in the pass => list has become already sorted
      displayArray(arr);
      return;
    }
  }
  displayArray(arr);
};

// inplace => but not adaptive
export const performBubbleSort2 = (arr: number[]): void => {
  for (let pass = 0; pass < arr.length - 1; pass++) {
    for (let i = 0; i < arr.length - 1 - pass; i++) {
      const nextIndex = i + 1;
      if (nextIndex < arr.length) {
        console.log(`Comparing ${arr[nextIndex]} and ${arr[i]}`);
        if (arr[i] > arr[nextIndex]) {
          swap(arr, nextIndex, i);
        }
      }
    }
  }
  displayArray(arr);
};

// const myArray = [7, -2, 4, 1, 3];
// const myArray = [8, 3, 7, 4, 9, 2, 6, 5];
// performBubbleSort(myArray);
// console.log(myArray);
