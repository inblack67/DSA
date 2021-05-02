const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const openBraces = {
  '(': ')',
  '[': ']',
  '{': '}',
};

const closedBraces = {
  ')': '(',
  ']': '[',
  '}': '{',
};

const isBalanced = (str) => {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const el = str[i];
    if (openBraces[el]) {
      // open brace => push
      stack.push(el);
    } else if (closedBraces[el]) {
      // close brace => check stack's top
      const top = stack[stack.length - 1];
      if (top !== closedBraces[el]) {
        console.log(false);
        return;
      } else {
        stack.pop();
      }
    }
  }
  console.log(stack.length === 0);
};

const main = () => {
  const str = readMe();
  isBalanced(str);
};
main();
