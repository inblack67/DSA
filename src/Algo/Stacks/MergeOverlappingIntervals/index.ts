const mergeOverlappingIntervals = (intervals: number[][]): void => {
  // sorting by start time
  const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
  const stack: number[][] = [];
  stack.push(intervals[0]);
  for (let i = 1; i < sortedIntervals.length; i++) {
    const interval = sortedIntervals[i];
    if (interval[0] > stack[stack.length - 1][1]) {
      stack.push(interval);
    } else {
      if (stack[stack.length - 1][1] < interval[1]) {
        stack[stack.length - 1][1] = interval[1];
      }
    }
  }
  console.log(stack);
};

mergeOverlappingIntervals([
  [22, 28],
  [1, 8],
  [25, 27],
  [14, 19],
  [27, 30],
  [5, 12],
  [23, 28],
  [19, 20],
  [2, 4],
  [16, 21],
]);

// mergeOverlappingIntervals([
//   [22, 28],
//   [1, 8],
//   [25, 27],
//   [14, 19],
//   [27, 30],
//   [5, 12],
// ]);

// mergeOverlappingIntervals([
//   [1, 8],
//   [22, 28],
//   [25, 27],
//   [27, 30],
//   [5, 12],
//   [14, 19],
// ]);
