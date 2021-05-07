const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const displayArray_3 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    process.stdout.write(`${arr[i]} `);
  }
  console.log();
};

// gives back the number at the specified digitPlace in the num
const getDigitPlaceNum = (num, digitPlace) => {
  return Math.floor((num / digitPlace) % 10);
};

// perfect count sort => sorts -ve nums and is stable
const performCountSortForRadixSort = (
  arr,
  digitPlace, // 1, 10, 100, ... (one's, ten's...)
) => {
  // range will now only between 0-9
  // 0 will be min always

  // filling up frequency array
  const frequency = new Array(10).fill(0);

  for (let i = 0; i < arr.length; i++) {
    const index = getDigitPlaceNum(arr[i], digitPlace);
    frequency[index]++;
  }

  // converting frequency array to prefix sum array
  for (let i = 1; i < frequency.length; i++) {
    frequency[i] += frequency[i - 1];
  }

  const ans = new Array(arr.length);

  for (let i = ans.length - 1; i >= 0; i--) {
    const value = getDigitPlaceNum(arr[i], digitPlace);
    const index = frequency[value] - 1;
    ans[index] = arr[i];
    frequency[value]--;
  }

  for (let i = 0; i < ans.length; i++) {
    arr[i] = ans[i];
  }

  process.stdout.write(
    'After sorting on ' + digitPlace.toString() + ' place -> ',
  );
  displayArray_3(arr);
};

const performRadixSort = (arr) => {
  const max = Math.max(...arr);
  // running till the max length => max digit's length

  let digitPlace = 1;
  while (digitPlace <= max) {
    performCountSortForRadixSort(arr, digitPlace);
    digitPlace *= 10;
  }
  displayArray_3(arr);
};

const main = () => {
  const arrSize = +readMe();
  const arr = [];
  for (let i = 0; i < arrSize; i++) {
    const el = +readMe();
    arr.push(el);
  }
  performRadixSort(arr);
};

main();
