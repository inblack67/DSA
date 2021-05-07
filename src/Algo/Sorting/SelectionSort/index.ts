// in place
const swap = (arr: number[], index1: number, index2: number): void => {
  console.log(`Swapping ${arr[index1]} and ${arr[index2]}`);
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};

const displayArray = (arr: number[]): void => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

// neither adaptive nor stable
const performSelectionSort = (arr: number[]): void => {
  // going till n - 1 as for last el => there will be no one further to traverse upon
  for (let i = 0; i < arr.length - 1; i++) {
    let k = i;
    for (let j = i + 1; j < arr.length; j++) {
      console.log(`Comparing ${arr[j]} and ${arr[k]}`);
      if (arr[j] < arr[k]) {
        k = j;
      }
    }
    swap(arr, i, k); // j done traversing => now swap i and k (smallest el's index)
  }
  displayArray(arr);
};

// const myArray = [7, -2, 4, 1, 3];
const myArray = [8, 3, 7, 4, 9, 2, 6, 5];
performSelectionSort(myArray);
console.log(myArray);
