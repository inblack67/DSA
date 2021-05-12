const slidingWindowMax = (arr: number[], windowSize: number) => {
  const nextGreaterElements: number[] = new Array(arr.length); // stores indexes
  nextGreaterElements[nextGreaterElements.length - 1] = arr.length; // -1 cannot be because we need to show that this is out of the window
  const stack: number[] = [];
  stack.push(arr.length - 1);
  for (let i = arr.length - 2; i >= 0; i--) {
    // big one will make the smaller ones pop
    while (stack.length > 0 && arr[i] >= arr[stack[stack.length - 1]]) {
      stack.pop();
    }
    nextGreaterElements[i] = stack[stack.length - 1] || arr.length;
    stack.push(i);
  }

  for (let i = 0; i <= arr.length - windowSize; i++) {
    let j = i;

    while (nextGreaterElements[j] < i + windowSize) {
      // keep on moving to the nge but inside the window
      j = nextGreaterElements[j];
    }
    console.log(arr[j]);
  }
};

// slidingWindowMax([5, 3, 8, -2, 7], 4);
slidingWindowMax([2, 9, 3, 8, 1, 7, 12, 6, 14, 4, 32, 0, 7, 19, 8, 12, 6], 4);
