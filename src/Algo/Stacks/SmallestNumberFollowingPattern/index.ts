const smallestNumberFollowingPattern = (pattern: string): void => {
  const stack: number[] = [];
  let count = 1;
  for (let i = 0; i < pattern.length; i++) {
    const el = pattern[i];
    if (el === 'd') {
      stack.push(count++);
    } else {
      // el === i
      stack.push(count++);
      while (stack.length > 0) {
        console.log(stack.pop());
      }
    }
  }
  stack.push(count);
  while (stack.length > 0) {
    console.log(stack.pop());
  }
};

smallestNumberFollowingPattern('ddddiiii');
