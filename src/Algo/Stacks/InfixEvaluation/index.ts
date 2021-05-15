const isNum = (char: string) => char.match(/[0-9]/gi);

const operatorPriorities: any = {
  '+': 1,
  '-': 1,
  '*': 2,
  '/': 2,
};

const infixEval = (expression: string): void => {
  const operandsStack: number[] = [];
  const operatorsStack: string[] = [];

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
        let res: number;
        if (operator === '+') {
          res = v1! + v2!;
        } else if (operator === '-') {
          res = v1! - v2!;
        } else if (operator === '*') {
          res = v1! * v2!;
        } else {
          // div operator
          res = Math.floor(v1! / v2!);
        }
        operandsStack.push(res); // popping '('
      }
      operatorsStack.pop(); // popping '('
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
        let res: number;
        if (operator === '+') {
          res = v1! + v2!;
        } else if (operator === '-') {
          res = v1! - v2!;
        } else if (operator === '*') {
          res = v1! * v2!;
        } else {
          res = Math.floor(v1! / v2!);
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
    let res: number;
    if (operator === '+') {
      res = v1! + v2!;
    } else if (operator === '-') {
      res = v1! - v2!;
    } else if (operator === '*') {
      res = v1! * v2!;
    } else {
      res = Math.floor(v1! / v2!);
      // / operator
    }
    operandsStack.push(res);
  }
  console.log(operandsStack[0]);
};

infixEval('3 / (6 * 8 - 4) + 9');
// infixEval('2 + 6 * 4 / 8 - 3');
