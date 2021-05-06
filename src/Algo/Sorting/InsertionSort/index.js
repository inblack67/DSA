const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

// in place
const swap_2 = (arr, index1, index2) => {
  console.log(`Swapping ${arr[index1]} and ${arr[index2]}`);
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};

const displayArray_2 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

// in place => but not stable
const performInsertionSort_2 = (arr) => {
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

const main = () => {
  const arrSize = +readMe();
  const arr = [];
  for (let i = 0; i < arrSize; i++) {
    const el = +readMe();
    arr.push(el);
  }
  performInsertionSort_2(arr);
};

main();
