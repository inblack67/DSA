const openBraces: any = {
  '(': ')',
  '[': ']',
  '{': '}',
};

const closedBraces: any = {
  ')': '(',
  ']': '[',
  '}': '{',
};

const isBalanced = (str: string): void => {
  const stack: string[] = [];
  for (let i = 0; i < str.length; i++) {
    console.log(stack);
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

// isBalanced('[123]');
// isBalanced('[(a + b) + {(c + d) * (e / f)}]');
isBalanced('[(a + b) + {(c + d) * (e / f)]}');
