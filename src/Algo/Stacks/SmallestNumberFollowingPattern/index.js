const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const smallestNumberFollowingPattern = (pattern) => {
  const stack = [];
  let count = 1;
  for (let i = 0; i < pattern.length; i++) {
    const el = pattern[i];
    if (el === 'd') {
      stack.push(count++);
    } else {
      // el === i
      stack.push(count++);
      while (stack.length > 0) {
        process.stdout.write(`${stack.pop()}`);
      }
    }
  }
  stack.push(count);
  while (stack.length > 0) {
    process.stdout.write(`${stack.pop()}`);
  }
};

const main = () => {
  smallestNumberFollowingPattern(readMe());
};

main();
