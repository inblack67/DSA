const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const largestHistogram = (arr) => {
  // a rect spreads until it finds next smaller element on it's right and left
  const nextSmallerOnRight = new Array(arr.length);
  const nextSmallerOnLeft = new Array(arr.length);

  const stack = [];
  stack.push(arr.length - 1);
  nextSmallerOnRight[arr.length - 1] = arr.length;
  for (let i = arr.length - 2; i >= 0; i--) {
    const el = arr[i];
    while (stack.length > 0 && el <= arr[stack[stack.length - 1]]) {
      stack.pop();
    }
    if (stack.length > 0) {
      nextSmallerOnRight[i] = stack[stack.length - 1];
    } else {
      nextSmallerOnRight[i] = arr.length;
    }
    stack.push(i);
  }

  const stack2 = [];

  stack2.push(0);
  nextSmallerOnLeft[0] = -1;
  for (let i = 1; i < arr.length; i++) {
    const el = arr[i];
    while (stack2.length > 0 && el <= arr[stack2[stack2.length - 1]]) {
      stack2.pop();
    }
    if (stack2.length > 0) {
      nextSmallerOnLeft[i] = stack2[stack2.length - 1];
    } else {
      nextSmallerOnLeft[i] = -1;
    }
    stack2.push(i);
  }

  let maxArea = 0;
  for (let i = 0; i < arr.length; i++) {
    const height = arr[i];
    const width = nextSmallerOnRight[i] - nextSmallerOnLeft[i] - 1;
    const area = height * width;
    if (area > maxArea) {
      maxArea = area;
    }
  }
  console.log(maxArea);
};

const main = () => {
  const arrSize = +readMe();
  const arr = [];
  for (let i = 0; i < arrSize; i++) {
    arr.push(+readMe());
  }
  largestHistogram(arr);
};

main();
