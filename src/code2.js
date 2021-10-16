const shortestMerge = (fileSizes) => {
  let ans = 0;
  const sortedSizes = fileSizes.sort((a, b) => a - b);
  while (sortedSizes.length > 1) {
    const pair = sortedSizes.sort((a, b) => a - b).splice(0, 2);
    const mergeTime = pair[0] + pair[1];
    ans += mergeTime;
    sortedSizes.push(mergeTime);
  }
  return ans;
};

console.log(shortestMerge([4, 8, 6, 12]));
