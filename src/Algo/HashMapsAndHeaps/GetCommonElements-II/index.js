const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const printCommonElements = (arr1, arr2) => {
  const hash1 = new Map();
  arr1.forEach((el) => {
    const count = hash1.get(el);
    if (count === undefined) {
      hash1.set(el, 1);
    } else {
      hash1.set(el, count + 1);
    }
  });
  arr2.forEach((el) => {
    const count = hash1.get(el);
    if (count) {
      console.log(el);
      hash1.set(el, count - 1);
    }
  });
};

const main = () => {
  const arr1Size = +readMe();
  const arr1 = [];
  for (let i = 0; i < arr1Size; i++) {
    arr1.push(+readMe());
  }
  const arr2Size = +readMe();
  const arr2 = [];
  for (let i = 0; i < arr2Size; i++) {
    arr2.push(+readMe());
  }
  printCommonElements(arr1, arr2);
};

main();
