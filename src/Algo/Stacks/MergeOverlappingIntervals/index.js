const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const display = (stack) => {
  for (let i = 0; i < stack.length; i++) {
    const interval = stack[i];
    process.stdout.write(`${interval[0]} ${interval[1]}`);
    console.log();
  }
};

const mergeOverlappingIntervals = (intervals) => {
  // sorting by start time
  const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
  const stack = [];
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
  display(stack);
};

const main = () => {
  const meets = +readMe();
  const intervals = [];
  for (let i = 0; i < meets; i++) {
    const interval = readMe()
      .split(' ')
      .map((el) => +el);
    intervals.push(interval);
  }
  mergeOverlappingIntervals(intervals);
};

main();
