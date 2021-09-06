const targetSumSubsets = (
  arr: number[],
  target: number,
  index: number,
  sum: number,
  ans: string,
): void => {
  if (index === arr.length) {
    if (sum === target) {
      console.log(ans, '');
    }
    return;
  }
  targetSumSubsets(
    arr,
    target,
    index + 1,
    sum + arr[index],
    ans + `${arr[index]} `,
  );
  targetSumSubsets(arr, target, index + 1, sum, ans);
};

targetSumSubsets([10, 20, 30, 40, 50], 60, 0, 0, '');

const printTargets = (
  nums: number[],
  target: number,
  sum: number = 0,
  ans: string = '',
): void => {
  if (nums.length === 0) {
    if (sum === target) {
      console.log(ans);
    }
    return;
  }

  const first = nums[0];
  const rest = nums.slice(1);
  printTargets(rest, 60, sum, ans);
  printTargets(rest, 60, sum + first, `${ans},${first}`);
};

printTargets([10, 20, 30, 40, 50], 60);
