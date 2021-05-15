const priorities: any = {
  '+': 1,
  '-': 1,
  '*': 2,
  '/': 2,
};

const infixConversions = (expression: string): void => {
  const prefixStack: string[] = [];
  const postfixStack: string[] = [];
  const operatorsStack: string[] = [];

  for (let i = 0; i < expression.length; i++) {
    const el = expression[i];
    if (el === '(') {
      operatorsStack.push(el);
    } else if (el === ')') {
      while (operatorsStack[operatorsStack.length - 1] !== '(') {
        const operator = operatorsStack.pop();
        const prefixv2 = prefixStack.pop();
        const prefixv1 = prefixStack.pop();

        let prefixRes = operator! + prefixv1 + prefixv2;
        prefixStack.push(prefixRes);

        const postfixv2 = postfixStack.pop();
        const postfixv1 = postfixStack.pop();
        let postfixRes = postfixv1! + postfixv2! + operator!;
        postfixStack.push(postfixRes);
      }
      operatorsStack.pop(); // popping '('
    } else if (el === '+' || el === '-' || el === '*' || el === '/') {
      // priority check
      while (
        operatorsStack.length > 0 &&
        priorities[el] <= priorities[operatorsStack[operatorsStack.length - 1]]
      ) {
        const operator = operatorsStack.pop();
        const prefixv2 = prefixStack.pop();
        const prefixv1 = prefixStack.pop();

        let prefixRes = operator! + prefixv1 + prefixv2;
        prefixStack.push(prefixRes);

        const postfixv2 = postfixStack.pop();
        const postfixv1 = postfixStack.pop();
        let postfixRes = postfixv1! + postfixv2! + operator!;
        postfixStack.push(postfixRes);
      }
      operatorsStack.push(el);
    } else {
      prefixStack.push(el);
      postfixStack.push(el);
    }
  }

  while (operatorsStack.length > 0) {
    const operator = operatorsStack.pop();
    const prefixv2 = prefixStack.pop();
    const prefixv1 = prefixStack.pop();

    let prefixRes = operator! + prefixv1 + prefixv2;
    prefixStack.push(prefixRes);

    const postfixv2 = postfixStack.pop();
    const postfixv1 = postfixStack.pop();
    let postfixRes = postfixv1! + postfixv2 + operator!;
    postfixStack.push(postfixRes);
  }

  console.log(postfixStack[0]);
  console.log(prefixStack[0]);
};

infixConversions('a*(b-c+d)/e');
