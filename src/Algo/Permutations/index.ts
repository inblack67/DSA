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
