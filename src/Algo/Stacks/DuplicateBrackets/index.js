const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const isDuplicate = (str) => {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const el = str[i];
    if (el === ')') {
      if (stack[stack.length - 1] === '(') {
        //   duplicacy found
        console.log(true);
        return;
      } else {
        while (stack[stack.length - 1] !== '(') {
          stack.pop();
        }
        stack.pop(); // removing the last el => ( => to)
      }
    } else {
      stack.push(el);
    }
  }
  console.log(false);
};

const main = () => {
  const str = readMe();
  isDuplicate(str);
};

main();
