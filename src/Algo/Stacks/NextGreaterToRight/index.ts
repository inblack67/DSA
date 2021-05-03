const ngtr = (arr: number[]): void => {
  const stack: number[] = [];
  stack.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    const el = arr[i];
    while (stack.length > 0) {
      if (el > stack[stack.length - 1]) {
        console.log(el);
        stack.pop();
      } else {
        console.log(-1);
        stack.pop();
      }
    }
    stack.push(el);
  }
};

ngtr([2, 5, 9, 3, 1, 12, 6, 8, 7]);
