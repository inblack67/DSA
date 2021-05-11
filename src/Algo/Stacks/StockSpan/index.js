const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const displayArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

const stockSpan = (arr) => {
  const stack = []; // stores indexes
  stack.push(0);
  console.log(1); // left greatest el not found so index + 1 => 0 + 1
  for (let i = 1; i < arr.length; i++) {
    while (stack.length > 0 && arr[i] > arr[stack[stack.length - 1]]) {
      stack.pop();
    }
    if (stack.length === 0) {
      console.log(i + 1);
    } else {
      console.log(i - stack[stack.length - 1]);
    }
    stack.push(i);
  }
};

const main = () => {
  const arrSize = +readMe();
  const arr = [];
  for (let i = 0; i < arrSize; i++) {
    arr.push(+readMe());
  }
  stockSpan(arr);
};

main();
