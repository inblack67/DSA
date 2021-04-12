const printArrayWithRecursion = (arr: number[], index: number = 0): void => {
  if (index === arr.length) {
    return;
  }
  console.log(arr[index]);
  return printArrayWithRecursion(arr, index + 1);
};

printArrayWithRecursion([1, 2, 3, 4, 5]);

const printArrayInReverseWithRecursion = (
  arr: number[],
  index: number,
): void => {
  if (index === -1) {
    return;
  }
  console.log(arr[index]);
  return printArrayInReverseWithRecursion(arr, index - 1);
};

printArrayInReverseWithRecursion([1, 2, 3, 4, 5], 4);

const maxOfArray = (nums: number[], index: number = 0): number => {
  const current = nums[index];
  if (index === nums.length - 1) {
    return current;
  }
  const next = maxOfArray(nums, index + 1);
  if (current > next) {
    return current;
  } else {
    return next;
  }
};

console.log(maxOfArray([12, 2, 4, 80, 19, 9]));
