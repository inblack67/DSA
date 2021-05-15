const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const isNum_4 = (char) => char.match(/[0-9]/gi);

const performOperation_2 = (v1, v2, operator) => {
  switch (operator) {
    case '+':
      return v1 + v2;
    case '-':
      return v1 - v2;
    case '*':
      return v1 * v2;
    case '/':
      const res = v1 / v2;
      if (res < 0) {
        // negative => Math.floor(-3.6) = 4
        return Math.ceil(v1 / v2);
      } else {
        return Math.floor(v1 / v2);
      }
    default:
      return;
  }
};

const prefixConversions = (expression) => {
  const postfixStack = [];
  const infixStack = [];
  const prefixValueStack = [];

  for (let i = expression.length - 1; i >= 0; i--) {
    const el = expression[i];
    if (isNum_4(el)) {
      postfixStack.push(el);
      infixStack.push(el);
      prefixValueStack.push(+el);
    } else {
      // el is an operator here

      const postfixV1 = postfixStack.pop();
      const postfixV2 = postfixStack.pop();
      const postfixRes = postfixV1 + postfixV2 + el;
      postfixStack.push(postfixRes);

      const infixV1 = infixStack.pop();
      const infixV2 = infixStack.pop();
      const infixRes = '(' + infixV1 + el + infixV2 + ')';
      infixStack.push(infixRes);

      const v1 = prefixValueStack.pop();
      const v2 = prefixValueStack.pop();
      const val = performOperation_2(+v1, +v2, el);
      prefixValueStack.push(val);
    }
  }

  console.log(prefixValueStack.pop());
  console.log(infixStack.pop());
  console.log(postfixStack.pop());
};

const main = () => {
  prefixConversions(readMe());
};
main();
