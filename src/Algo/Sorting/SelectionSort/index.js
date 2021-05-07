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

const performSelectionSort = (arr) => {
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

const main = () => {
  const arrSize = +readMe();
  const arr = [];
  for (let i = 0; i < arrSize; i++) {
    const el = +readMe();
    arr.push(el);
  }
  performSelectionSort(arr);
};

main();
