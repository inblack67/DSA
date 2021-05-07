const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const displayArray_2 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

// sorts negative nums too
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

  let j = 0;

  for (let i = 0; i < frequency.length; i++) {
    let el = frequency[i];
    while (el > 0) {
      arr[j++] = i + min;
      el--;
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
  performCountSort(arr);
};

main();
