const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const slidingWindowMax = (arr, windowSize) => {
  const nextGreaterElements = new Array(arr.length); // stores indexes
  nextGreaterElements[nextGreaterElements.length - 1] = arr.length; // -1 cannot be because we need to show that this is out of the window
  const stack = [];
  stack.push(arr.length - 1);
  for (let i = arr.length - 2; i >= 0; i--) {
    // big one will make the smaller ones pop
    while (stack.length > 0 && arr[i] >= arr[stack[stack.length - 1]]) {
      stack.pop();
    }
    nextGreaterElements[i] = stack[stack.length - 1] || arr.length;
    stack.push(i);
  }

  for (let i = 0; i <= arr.length - windowSize; i++) {
    let j = i;

    while (nextGreaterElements[j] < i + windowSize) {
      // keep on moving to the nge but inside the window
      j = nextGreaterElements[j];
    }
    console.log(arr[j]);
  }
};

const main = () => {
  const arrSize = +readMe();
  const arr = [];
  for (let i = 0; i < arrSize; i++) {
    arr.push(+readMe());
  }
  const windowSize = +readMe();
  slidingWindowMax(arr, windowSize);
};

main();
