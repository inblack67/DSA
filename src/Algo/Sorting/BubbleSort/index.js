const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

// in place
const swap = (arr, index1, index2) => {
  console.log(`Swapping ${arr[index1]} and ${arr[index2]}`);
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};

const displayArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

// in place => but not stable
const performBubbleSort = (arr) => {
  for (let pass = 0; pass < arr.length - 1; pass++) {
    for (let i = 0; i < arr.length - 1 - pass; i++) {
      const nextIndex = i + 1;
      console.log(`Comparing ${arr[nextIndex]} and ${arr[i]}`);
      if (arr[i] > arr[nextIndex]) {
        swap(arr, nextIndex, i);
      }
    }
  }
  displayArray(arr);
};

const main = () => {
  const arrSize = +readMe();
  const arr = [];
  for (let i = 0; i < arrSize; i++) {
    const el = +readMe();
    arr.push(el);
  }
  performBubbleSort(arr);
};

main();
