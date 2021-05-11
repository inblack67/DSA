const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const displayArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

const ngtr = (arr) => {
  const stack = [];
  const res = new Array(arr.length);
  stack.push(arr[arr.length - 1]);
  res[arr.length - 1] = -1; // -1 for the last el as no one is on it's right
  for (let i = arr.length - 2; i >= 0; i--) {
    const el = arr[i];
    if (el < stack[stack.length - 1]) {
      res[i] = stack[stack.length - 1];
      stack.push(el);
    } else {
      while (el > stack[stack.length - 1]) {
        // runs only some times so it's not O(n^2)
        stack.pop();
      }
      res[i] = stack[stack.length - 1] || -1;
      stack.push(el);
    }
  }
  displayArray(res);
};

const main = () => {
  const arrSize = +readMe();
  const arr = [];
  for (let i = 0; i < arrSize; i++) {
    arr.push(+readMe());
  }
  ngtr(arr);
};

main();
