const ngtr = (arr: number[]): void => {
  const stack: number[] = [];
  const res: number[] = new Array(arr.length);
  stack.push(arr[arr.length - 1]);
  res[arr.length - 1] = -1; // -1 for the last el as no one is on it's right
  for (let i = arr.length - 2; i >= 0; i--) {
    const el = arr[i];
    if (el < stack[stack.length - 1]) {
      res[i] = stack[stack.length - 1];
      stack.push(el);
    } else {
      // runs only some times so it's not O(n^2)
      // for arr => 5, 3, 8, -2, 7 => for 8 it will run etc..
      while (el > stack[stack.length - 1]) {
        stack.pop();
      }
      res[i] = stack[stack.length - 1] || -1;
      stack.push(el);
    }
  }
  console.log(res);
};

ngtr([5, 3, 8, -2, 7]);
