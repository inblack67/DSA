const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

// in place
const swap_5 = (arr, index1, index2) => {
  console.log(`Swapping ${arr[index1]} and ${arr[index2]}`);
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};

const displayArray_5 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    process.stdout.write(`${arr[i]} `);
  }
};

const performParitioning = (arr, pivot) => {
  let i = 0;
  let j = 0;
  while (i < arr.length) {
    if (arr[i] > pivot) {
      i++;
    } else {
      swap_5(arr, i, j);
      i++;
      j++;
    }
  }
  displayArray_5(arr);
};

const main = () => {
  const arrSize = +readMe();
  const arr = [];
  for (let i = 0; i < arrSize; i++) {
    const el = +readMe();
    arr.push(el);
  }
  const pivot = +readMe();
  performParitioning(arr, pivot);
};

main();
