const findMedianSortedArrays = (nums1: number[], nums2: number[]): number => {
  const combinedArray: number[] = [...nums1, ...nums2].sort((a, b) => a - b);

  console.log(combinedArray);

  const len = combinedArray.length;

  if (len % 2 === 0) {
    const mid = len / 2;
    const median = (combinedArray[mid] + combinedArray[mid - 1]) / 2;
    return median;
  } else {
    const median = Math.floor(len / 2);
    return combinedArray[median];
  }
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([0, 0], [0, 0]));
console.log(findMedianSortedArrays([], [1]));
console.log(findMedianSortedArrays([2], []));
