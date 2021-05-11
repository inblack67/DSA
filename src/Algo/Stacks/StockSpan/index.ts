const stockSpan = (arr: number[]): void => {
  const stack: number[] = []; // stores indexes
  stack.push(0);
  console.log(1); // left greatest el not found so index + 1 => 0 + 1
  for (let i = 1; i < arr.length; i++) {
    while (stack.length > 0 && arr[i] > arr[stack[stack.length - 1]]) {
      stack.pop();
    }
    if (stack.length === 0) {
      console.log(i + 1);
    } else {
      console.log(i - stack[stack.length - 1]);
    }
    stack.push(i);
  }
};

stockSpan([2, 5, 9, 3, 1, 12, 6, 8, 7]);
