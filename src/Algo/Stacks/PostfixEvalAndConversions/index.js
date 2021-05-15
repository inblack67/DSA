const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const isNum_3 = (char) => char.match(/[0-9]/gi);

const performOperation = (v1, v2, operator) => {
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

const postfixConversions = (expression) => {
  const prefixStack = [];
  const infixStack = [];
  const postfixValueStack = [];

  for (let i = 0; i < expression.length; i++) {
    const el = expression[i];
    if (isNum_3(el)) {
      prefixStack.push(el);
      infixStack.push(el);
      postfixValueStack.push(+el);
    } else {
      const prefixV2 = prefixStack.pop();
      const prefixV1 = prefixStack.pop();
      const prefixRes = el + prefixV1 + prefixV2;
      prefixStack.push(prefixRes);

      const infixV2 = infixStack.pop();
      const infixV1 = infixStack.pop();
      const infixRes = '(' + infixV1 + el + infixV2 + ')';
      infixStack.push(infixRes);

      const v2 = postfixValueStack.pop();
      const v1 = postfixValueStack.pop();
      const val = performOperation(+v1, +v2, el);
      postfixValueStack.push(val);
    }
  }

  console.log(postfixValueStack.pop());
  console.log(infixStack.pop());
  console.log(prefixStack.pop());
};

const main = () => {
  postfixConversions(readMe());
};

main();
