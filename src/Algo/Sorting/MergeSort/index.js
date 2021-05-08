const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const display = (arr) => {
  process.stdout.write(`Sorted Array -> `);
  for (let i = 0; i < arr.length; i++) {
    process.stdout.write(`${arr[i]} `);
  }
};

const performMerging_2 = (arr1, arr2) => {
  console.log('Merging these two arrays');
  process.stdout.write('left array -> ');
  for (let i = 0; i < arr1.length; i++) {
    process.stdout.write(`${arr1[i]} `);
  }
  console.log();
  process.stdout.write('right array -> ');
  for (let i = 0; i < arr2.length; i++) {
    process.stdout.write(`${arr2[i]} `);
  }
  console.log();
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

  //   copying the remains
  for (; i < arr1.length; i++) {
    merge[k++] = arr1[i];
  }
  //   copying the remains
  for (; j < arr2.length; j++) {
    merge[k++] = arr2[j];
  }
  return merge;
};

const performMergeSort = (arr, low, high) => {
  if (low === high) {
    // only one element in the arr
    const myArr = new Array(1);
    myArr[0] = arr[low];
    return myArr;
  }

  const mid = Math.floor((low + high) / 2);
  const first = performMergeSort(arr, low, mid);
  const second = performMergeSort(arr, mid + 1, high);
  return performMerging_2(first, second);
};

const main = () => {
  const size = +readMe();
  const arr = new Array(size);
  for (let i = 0; i < size; i++) {
    arr[i] = +readMe();
  }
  const res = performMergeSort(arr, 0, arr.length - 1);
  display(res);
};

main();
