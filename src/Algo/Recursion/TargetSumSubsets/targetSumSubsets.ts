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
