const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const maxSumNonAdjacent = (arr) => {
  let include = arr[0];
  let exclude = 0;
  for (let i = 1; i < arr.length; i++) {
    const newInclude = exclude + arr[i];
    const newExclude = Math.max(include, exclude);
    include = newInclude;
    exclude = newExclude;
  }
  console.log(Math.max(include, exclude));
};

const main = () => {
  const arrSize = +readMe();
  const arr = [];
  for (let i = 0; i < arrSize; i++) {
    const el = +readMe();
    arr.push(el);
  }
  maxSumNonAdjacent(arr);
};

main();
