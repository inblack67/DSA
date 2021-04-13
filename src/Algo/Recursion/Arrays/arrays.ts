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
  if (index === arr.length) {
    return;
  }
  printArrayInReverseWithRecursion(arr, index + 1);
  console.log(arr[index]);
};

printArrayInReverseWithRecursion([1, 2, 3, 4, 5], 0);

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

const firstIndexOfOccurrence = (
  arr: number[],
  index: number,
  data: number,
): number => {
  if (index === arr.length) {
    return -1;
  }
  if (arr[index] === data) {
    return index;
  } else {
    return firstIndexOfOccurrence(arr, index + 1, data);
  }
};

console.log(firstIndexOfOccurrence([6, 3, 4, 2, 4, 2, 4, 1, 1], 0, 1));

const lasttIndexOfOccurrence = (
  arr: number[],
  index: number,
  data: number,
): number => {
  if (index === arr.length) {
    return -1;
  }
  const next = lasttIndexOfOccurrence(arr, index + 1, data);
  if (arr[next] === data) {
    return next;
  } else {
    return index;
  }
};

console.log(lasttIndexOfOccurrence([6, 3, 4, 2, 4, 2, 4, 1, 1], 0, 2));

const allIndexesOfOccurrence = (
  arr: number[],
  index: number,
  data: number,
  timesFound: number = 0,
): number[] => {
  if (index === arr.length) {
    const res: number[] = new Array(timesFound);
    return res;
  }
  const curr = arr[index];
  if (curr === data) {
    // found
    const resArr1 = allIndexesOfOccurrence(
      arr,
      index + 1,
      data,
      timesFound + 1,
    );
    resArr1[timesFound] = index;
    return resArr1
  } else {
    const resArr2 = allIndexesOfOccurrence(arr, index + 1, data, timesFound);
    return resArr2;
  }
};

console.log(allIndexesOfOccurrence([6, 3, 4, 2, 4, 2, 4, 1, 1], 0, 4));
