const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const displayArray_2 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

// sorts negative nums & stable
const performCountSort = (arr) => {
  // calc max min
  let min = Number.MAX_SAFE_INTEGER;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  // filling up frequency array
  const frequency = new Array(max - min + 1).fill(0);

  for (let i = 0; i < arr.length; i++) {
    const index = arr[i] - min;
    frequency[index]++;
  }

  // converting frequency array to prefix sum array
  for (let i = 1; i < frequency.length; i++) {
    frequency[i] += frequency[i - 1];
  }

  const ans = new Array(arr.length);

  for (let i = ans.length - 1; i >= 0; i--) {
    const value = arr[i];
    const index = frequency[value - min] - 1;
    ans[index] = value;
    frequency[value - min]--;
  }

  for (let i = 0; i < ans.length; i++) {
    arr[i] = ans[i];
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
  performCountSort(arr);
};

main();
