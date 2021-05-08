const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const display = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

const performMerging = (arr1, arr2) => {
  const merge = new Array(arr1.length + arr2.length);
  let i = 0; // arr1 index
  let j = 0; // arr2 index
  let k = 0; // arr3 index
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      merge[k++] = arr1[i++];
    } else {
      merge[k++] = arr2[j++];
    }
  }
  for (; i < arr1.length; i++) {
    merge[k++] = arr1[i];
  }
  for (; j < arr2.length; j++) {
    merge[k++] = arr2[j];
  }
  display(merge);
};

const main = () => {
  const size1 = +readMe();
  const arr1 = new Array(size1);
  for (let i = 0; i < size1; i++) {
    arr1[i] = +readMe();
  }
  const size2 = +readMe();
  const arr2 = new Array(size2);
  for (let i = 0; i < size2; i++) {
    arr2[i] = +readMe();
  }
  performMerging(arr1, arr2);
};

main();
