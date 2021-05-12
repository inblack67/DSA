const largestHistogram = (arr: number[]): void => {
  // a rect spreads until it finds next smaller element on it's right and left
  const nextSmallerOnRight: number[] = new Array(arr.length);
  const nextSmallerOnLeft: number[] = new Array(arr.length);

  const stack: number[] = [];
  stack.push(arr.length - 1);
  nextSmallerOnRight[arr.length - 1] = arr.length;
  for (let i = arr.length - 2; i >= 0; i--) {
    const el = arr[i];
    // has to stop on the smaller => equal or greater would pass
    while (stack.length > 0 && el <= arr[stack[stack.length - 1]]) {
      stack.pop();
    }
    if (stack.length > 0) {
      nextSmallerOnRight[i] = stack[stack.length - 1];
    } else {
      nextSmallerOnRight[i] = arr.length;
    }
    stack.push(i);
  }

  const stack2: number[] = [];

  stack2.push(0);
  nextSmallerOnLeft[0] = -1;
  for (let i = 1; i < arr.length; i++) {
    const el = arr[i];
    while (stack2.length > 0 && el <= arr[stack2[stack2.length - 1]]) {
      stack2.pop();
    }
    if (stack2.length > 0) {
      nextSmallerOnLeft[i] = stack2[stack2.length - 1];
    } else {
      nextSmallerOnLeft[i] = -1;
    }
    stack2.push(i);
  }

  let maxArea = 0;
  for (let i = 0; i < arr.length; i++) {
    const height = arr[i];
    const width = nextSmallerOnRight[i] - nextSmallerOnLeft[i] - 1;
    const area = height * width;
    if (area > maxArea) {
      maxArea = area;
    }
  }
  console.log(maxArea);
};

largestHistogram([2, 5, 8, 5, 2, 8, 2, 8, 5, 4, 6]);
// largestHistogram([6, 2, 5, 4, 5, 1, 6]);
