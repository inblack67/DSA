const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const findPivot = (arr) => {
  let low = 0;
  let high = arr.length - 1;
  while (low < high) {
    //   low === high => our result
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] < arr[high]) {
      // dropping on LHS
      high = mid;
    } else {
      // dropping on RHS
      low = mid + 1;
    }
  }
  console.log(arr[high]);
};

const main = () => {
  const arrSize = +readMe();
  const arr = [];
  for (let i = 0; i < arrSize; i++) {
    const el = +readMe();
    arr.push(el);
  }
  findPivot(arr);
};

main();
