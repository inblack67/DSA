const isDuplicate = (str: string) => {
  const stack: string[] = [];
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

isDuplicate('(a + b) + ((c + d))');
isDuplicate('((a + b) + (c + d))');
