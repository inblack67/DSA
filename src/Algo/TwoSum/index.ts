const twoSum = (nums: number[], target: number): number[] => {
  const hash: Record<number, number> = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const other = target - num;
    const otherIndex = hash[other];

    if (otherIndex !== undefined) {
      return [otherIndex, i];
    }

    hash[num] = i;
  }

  return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
