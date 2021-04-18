const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const displayArr = (arr, index = 0) => {
  if (index === arr.length) {
    return;
  }
  console.log(arr[index]);
  return displayArr(arr, index + 1);
};

const main = () => {
  const arrSize = readMe();
  const arr = [];
  for (let i = 0; i < arrSize; i++) {
    const num = readMe();
    arr.push(num);
  }
  displayArr(arr);
};

main();
