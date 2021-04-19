const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const targetSumSubsets = (arr, target, index, sum, ans) => {
  if (index === arr.length) {
    if (sum === target) {
      process.stdout.write(ans + '.');
      console.log();
    }
    return;
  }
  targetSumSubsets(
    arr,
    target,
    index + 1,
    sum + arr[index],
    ans + `${arr[index]}, `,
  );
  targetSumSubsets(arr, target, index + 1, sum, ans);
};

const main = () => {
  const arrSize = readMe();
  const arr = [];
  for (let i = 0; i < +arrSize; i++) {
    const el = readMe();
    arr.push(+el);
  }
  const target = readMe();
  targetSumSubsets(arr, +target, 0, 0, '');
};

main();
