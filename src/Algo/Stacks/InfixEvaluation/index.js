const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const isNum = (char) => char.match(/[0-9]/gi);

const operatorPriorities = {
  '+': 1,
  '-': 1,
  '*': 2,
  3: 2,
};

const infixEval = (expression) => {
  const operandsStack = [];
  const operatorsStack = [];

  for (let i = 0; i < expression.length; i++) {
    const el = expression[i];
    if (el === '(') {
      operatorsStack.push(el);
    } else if (isNum(el)) {
      operandsStack.push(+el);
    } else if (el === ')') {
      while (operatorsStack[operatorsStack.length - 1] !== '(') {
        const operator = operatorsStack.pop();
        const v2 = operandsStack.pop();
        const v1 = operandsStack.pop();
        let res;
        if (operator === '+') {
          res = v1 + v2;
        } else if (operator === '-') {
          res = v1 - v2;
        } else if (operator === '*') {
          res = v1 * v2;
        } else {
          res = Math.floor(v1 / v2);
          // / operator
        }
        operandsStack.push(res);
      }
      operatorsStack.pop();
    } else if (el === '+' || el === '-' || el === '*' || el === '/') {
      while (
        operatorsStack.length > 0 &&
        operatorsStack[operatorsStack.length - 1] !== '(' &&
        operatorPriorities[el] <=
          operatorPriorities[operatorsStack[operatorsStack.length - 1]]
      ) {
        const operator = operatorsStack.pop();
        const v2 = operandsStack.pop();
        const v1 = operandsStack.pop();
        let res;
        if (operator === '+') {
          res = v1 + v2;
        } else if (operator === '-') {
          res = v1 - v2;
        } else if (operator === '*') {
          res = v1 * v2;
        } else {
          res = Math.floor(v1 / v2);
          // / operator
        }
        operandsStack.push(res);
      }
      operatorsStack.push(el);
    }
  }
  while (operatorsStack.length > 0) {
    const operator = operatorsStack.pop();
    const v2 = operandsStack.pop();
    const v1 = operandsStack.pop();
    let res;
    if (operator === '+') {
      res = v1 + v2;
    } else if (operator === '-') {
      res = v1 - v2;
    } else if (operator === '*') {
      res = v1 * v2;
    } else {
      res = Math.floor(v1 / v2);
      // / operator
    }
    operandsStack.push(res);
  }
  console.log(operandsStack[operandsStack.length - 1]);
};

const main = () => {
  infixEval(readMe());
};

main();
