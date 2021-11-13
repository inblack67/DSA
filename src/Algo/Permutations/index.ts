const printArrayPermutations = (nums: number[], res: string = ''): void => {
  if (nums.length === 0) {
    console.log(res);
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const left = nums.slice(0, i);
    const right = nums.slice(i + 1);
    const restNums = [...left, ...right];
    printArrayPermutations(restNums, res + current);
  }
};

printArrayPermutations([1, 2, 3]);

const getArrayPermutations = (arr: number[]): number[][] => {
  if (arr.length === 0) {
    return [];
  } else if (arr.length === 1) {
    return [[arr[0]]];
  }
  const res: number[][] = [];
  for (let index = 0; index < arr.length; index++) {
    const current = arr[index];
    const left = arr.slice(0, index);
    const right = arr.slice(index + 1);
    const newArr = [...left, ...right];
    const soFar = getArrayPermutations(newArr);
    soFar.forEach((el) => el.unshift(current));
    res.push(...soFar);
  }
  return res;
};

console.log(getArrayPermutations([1, 2, 3]));
console.log(getArrayPermutations([0, 1]));
console.log(getArrayPermutations([1]));
