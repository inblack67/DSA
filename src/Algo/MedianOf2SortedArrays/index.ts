const findMedianSortedArrays = (nums1: number[], nums2: number[]): number => {
  const combinedArray: number[] = [];

  let i = 0;
  let j = 0;

  while (i < nums1.length && j < nums2.length) {
    const el1 = nums1[i];
    const el2 = nums2[j];

    if (el1 <= el2) {
      combinedArray.push(el1);
      i++;
    } else {
      combinedArray.push(el2);
      j++;
    }
  }

  while (i < nums1.length) {
    const el = nums1[i];
    combinedArray.push(el);
    i++;
  }

  while (j < nums2.length) {
    const el = nums2[j];
    combinedArray.push(el);
    j++;
  }

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

const findMedianSortedArrays_2 = (nums1: number[], nums2: number[]): number => {
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
